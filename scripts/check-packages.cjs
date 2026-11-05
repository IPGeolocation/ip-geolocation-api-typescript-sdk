const assert = require('node:assert/strict');
const { access, copyFile, mkdir, mkdtemp, rm, symlink } = require('node:fs/promises');
const { execFileSync } = require('node:child_process');
const { tmpdir } = require('node:os');
const { createRequire } = require('node:module');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const pkg = require('../package.json');

async function main() {
  const esm = await import(pkg.name);
  const cjs = require(pkg.name);
  assert.deepEqual(Object.keys(esm).sort(), Object.keys(cjs).sort());
  assert.equal(esm.getVersion(), pkg.version);
  assert.equal(cjs.getVersion(), pkg.version);
  await access(path.resolve(__dirname, '..', pkg.types));
  await access(path.resolve(__dirname, '..', 'dist/index.d.cts'));

  for (const sdk of [esm, cjs]) {
    const config = new sdk.IpGeolocationClientConfig({ apiKey: 'package-test' });
    assert.equal(config.baseUrl, 'https://api.ipgeolocation.io');
    assert.equal(Object.isFrozen(config), true);
    for (const output of [esm.toJson(config), cjs.toPrettyJson(config), JSON.stringify(config)]) {
      assert.equal(JSON.parse(output).apiKey, '[REDACTED]');
    }
    assert.equal(sdk.IpGeolocationClient.defaultUserAgent(), 'ipgeolocation-typescript-sdk/' + pkg.version);
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
  const typesEsm = await import(pathToFileURL(path.join(typesRoot, typesPkg.exports['.'].import.default)).href);
  assert.deepEqual(Object.keys(typesEsm), []);
  assert.deepEqual(Object.keys(typesCjs), []);
  await access(path.join(typesRoot, typesPkg.types));
  await access(path.join(typesRoot, 'dist/index.d.cts'));
  assert.equal(typesPkg.version, pkg.version);
  await checkConsumerTypes(pkg, typesPkg, typesRoot);
  console.log(`SDK and types package ESM, CommonJS and declarations checked on ${process.version}`);
}

async function checkConsumerTypes(sdk, types, typesRoot) {
  const consumer = await mkdtemp(path.join(tmpdir(), 'ipgeo-types-'));
  try {
    const modules = path.join(consumer, 'node_modules');
    await mkdir(modules);
    const root = path.resolve(__dirname, '..');
    await symlink(root, path.join(modules, sdk.name), 'junction');
    await symlink(typesRoot, path.join(modules, types.name), 'junction');
    const fixture = path.join(root, 'tests/package-consumer.ts');
    for (const file of ['consumer.cts', 'consumer.mts']) {
      await copyFile(fixture, path.join(consumer, file));
    }
    await copyFile(path.join(root, 'tests/package-esm.mts'), path.join(consumer, 'package-esm.mts'));
    for (const mode of ['Node16', 'NodeNext']) {
      execFileSync(process.execPath, [require.resolve('typescript/bin/tsc'), '--strict', '--noEmit',
        '--target', 'ES2020', '--module', mode, '--moduleResolution', mode, 'consumer.cts', 'consumer.mts', 'package-esm.mts'],
        { cwd: consumer, stdio: 'inherit' });
    }
  } finally {
    await rm(consumer, { recursive: true, force: true });
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
