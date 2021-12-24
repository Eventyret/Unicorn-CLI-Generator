#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');
const { green: g, dim: d } = require('chalk');
const alert = require('cli-alert');
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
  const outDir = vars.name;
  const inDirPath = path.join(__dirname, `template`);
  const outDirPath = path.join(process.cwd(), outDir);

  copy(inDirPath, outDirPath, vars, (err, createdFiles) => {
    if (err) throw err;
    console.log(d(`\nCreating files in : ${g(`./${outDir}`)}`));
    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`Created ${fileName}`);
    });
    alert({
      type: 'success',
      name: 'ALL DONE',
      msg: `\n\n${createdFiles.length} files created in ${d(`./${outDir}`)} directory`,
    });
  });
})();
