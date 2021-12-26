#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 * @author {{authorName}} <{{authorURL}}>
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
