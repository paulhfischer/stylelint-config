#!/usr/bin/env node
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
