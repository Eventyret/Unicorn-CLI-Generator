#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');
const { green: g, dim: d } = require('chalk');
const init = require('./utils/init');
const ask = require('./utils/ask');

(async () => {
  init();

  const name = await ask({ message: `CLI name?`, hint: `e.g. unicorn-cli )(kebab-case only)` });
  const description = await ask({ message: `CLI description?` });
  const version = await ask({ message: `CLI version?`, initial: `1.0.0` });

  const authorName = await ask({ message: `CLI author name?` });
  const authorEmail = await ask({ message: `CLI author email?` });
  const authorURL = await ask({ message: `CLI author URL?` });
  const license = await ask({ message: `License` });

  const vars = { name, description, version, authorName, authorEmail, authorURL };

  const inDir = path.join(__dirname, `template`);
  const outDir = path.join(process.cwd(), vars.name);

  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;
    console.log();
    console.log(d(`Creating files in : ${g(`./${vars.name}`)}`));
    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`Created ${fileName}`);
    });
    console.log('Done');
    console.log();
  });
})();
