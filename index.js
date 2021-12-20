#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');
const { Input } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');

const init = require('./utils/init');

(async () => {
  init();
  const [err, name] = await to(new Input({ message: `CLI nanme>`, hint: `(use kebab-case only)` }).run());

  handleError('INPUT', err);
  const vars = { name, description: `CLI to resize and optimize images`, version: '0.0.1' };

  const inDir = path.join(__dirname, `template`);
  const outDir = path.join(process.cwd(), vars.name);

  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;
    console.log();
    console.log(`Creating files in : ./${vars.name}`);
    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`Created ${fileName}`);
    });
    console.log('Done');
    console.log();
  });
})();
