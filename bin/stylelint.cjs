#!/usr/bin/env node
// stylelint resolves shareable configs relative to the config file, the working directory and the
// global npm prefix (read from $PREFIX) only. Point the latter to the prefix this package is
// installed in, so that configs extending `@paulhfischer/stylelint-config` also work inside the
// pre-commit environment without installing the packages locally.
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const stylelint = path.join(
    path.dirname(require.resolve('stylelint/package.json')),
    'bin',
    'stylelint.mjs',
);

const env = { ...process.env };
if (!env.PREFIX && env.npm_config_prefix) env.PREFIX = env.npm_config_prefix;

const { status, error } = spawnSync(process.execPath, [stylelint, ...process.argv.slice(2)], {
    stdio: 'inherit',
    env,
});
if (error) throw error;
process.exit(status ?? 1);
