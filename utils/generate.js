const path = require('path');
const ora = require('ora');
const execa = require('execa');
const copy = require('copy-template-dir');
const { green: g, dim: d, yellow: y } = require('chalk');
const alert = require('cli-alerts');

const spinner = ora({ text: `` });
const questions = require('./questions');
module.exports = async () => {
  const vars = await questions();
  const outDir = vars.name;
  const inDirPath = path.join(__dirname, `../template`);
  const outDirPath = path.join(process.cwd(), outDir);

  copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
    if (err) throw err;
    console.log(d(`\nCreating files in : ${g(`./${outDir} directory:\n`)}`));
    createdFiles.forEach(filePath => {
      const fileName = path.basename(filePath);
      console.log(`${g(`CREATED`)} Created ${fileName}`);
    });
    console.log();
    spinner.start(
      `${y(`DEPENDENCIES`)} installing...\n\n${d(
        `This may take a while... grab a coffee ☕️`
      )}`
    );
    process.chdir(outDirPath);
    const pkgs = [
      `meow`,
      `chalk`,
      `cli-alerts`,
      `cli-welcome`,
      `cli-meow-help`,
      `cli-handle-error`,
      `cli-handle-unhandled`
    ];
    await execa(`npm`, [`install`, ...pkgs]);
    await execa(`npm`, [`dedupe`]);
    spinner.succeed(`${g(`DE{ENDENCIES}`)} installed!`);

    alert({
      type: 'success',
      name: 'ALL DONE',
      msg: `\n\n${createdFiles.length} files created in ${d(
        `./${outDir}`
      )} directory`
    });
  });
};
