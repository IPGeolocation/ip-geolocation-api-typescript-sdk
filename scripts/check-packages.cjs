const assert = require('node:assert/strict');
const { access } = require('node:fs/promises');
const { createRequire } = require('node:module');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const pkg = require('../package.json');

async function main() {
  const esm = await import(pkg.name);
  const cjs = require(pkg.name);
  assert.deepEqual(Object.keys(esm).sort(), Object.keys(cjs).sort());
  assert.equal(esm.getVersion(), cjs.getVersion());
  await access(path.resolve(__dirname, '..', pkg.types));
  await access(path.resolve(__dirname, '..', 'dist/index.d.cts'));

  for (const sdk of [esm, cjs]) {
    const config = new sdk.IpGeolocationClientConfig({ apiKey: 'package-test' });
    assert.equal(config.baseUrl, 'https://api.ipgeolocation.io');
    assert.equal(Object.isFrozen(config), true);
    const request = new sdk.LookupIpGeolocationRequest({ ip: '2001:db8::1' });
    assert.equal(request.ip, '2001:db8::1');
    assert.equal(request.output, sdk.ResponseFormat.JSON);
    const client = new sdk.IpGeolocationClient(config);
    assert.equal(typeof client.bulkLookupIpGeolocationRaw, 'function');
    await client.close();
  }

  const typesRoot = path.resolve(__dirname, '../packages/types');
  const typesManifest = path.join(typesRoot, 'package.json');
  const typesPkg = require(typesManifest);
  const typesCjs = createRequire(typesManifest)(typesPkg.name);
  const typesEsm = await import(pathToFileURL(path.join(typesRoot, typesPkg.exports['.'].import)).href);
  assert.deepEqual(Object.keys(typesEsm), []);
  assert.deepEqual(Object.keys(typesCjs), []);
  await access(path.join(typesRoot, typesPkg.types));
  await access(path.join(typesRoot, 'dist/index.d.cts'));
  console.log(`SDK and types package ESM, CommonJS and declarations checked on ${process.version}`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
