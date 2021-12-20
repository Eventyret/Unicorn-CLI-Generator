const welcome = require('cli-welcome');
const pkg = require('./../package.json');

module.exports = () => {
  welcome({
    title: 'create-unicorn-cli',
    tagLine: 'by eventyret (dehlin.dev)',
    description: pkg.description,
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear: true,
    version: pkg.version,
  });
};
