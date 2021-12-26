const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: {{name}},
    tagLine: `by {{authorName}}`,
    version: pkg.version,
    description: pkg.description,
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear,
  });
};
