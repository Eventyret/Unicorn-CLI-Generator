#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');

const init = require('./utils/init');
const ask = require('./utils/ask');

(async () => {
  init();

  const name = await ask({ message: `CLI name?`, hint: `e.g. unicorn-cli )(kebab-case only)` });
  const description = await ask({ message: `CLI description?` });
  const version = await ask({ message: `CLI version?` });
  const vars = { name, description, version };

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
