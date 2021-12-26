#!/usr/bin/env node

/**
 * test
 * test
 * @author test <test>
 */

const init = require('./utils/init');
const cli = require('../utils/cli');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
  init({ clear });
  input.include(`help`) && cli.showHelp(0);
  debug && log(flags);
})();
