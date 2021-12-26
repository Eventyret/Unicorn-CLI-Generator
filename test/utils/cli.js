const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `Clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Print the CLI version`,
  },
};

const commands = {
  help: {
    description: `Print help info`,
  },
};

const helpText = meowHelp({
  name: `test`,
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);
