#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 */

const init = require('./utils/init');
const cli = require('../utils/cli');
const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
  init({ clear });
})();
