const ask = require('./ask');

module.exports = async () => {
  const name = await ask({ message: `CLI name?`, hint: `e.g. unicorn-cli )(kebab-case only)` });
  const command = await ask({ message: `CLI command?`, hint: `(optional: if different from CLI name)` });
  const description = await ask({ message: `CLI description?` });
  const version = await ask({ message: `CLI version?`, initial: `1.0.0` });

  const authorName = await ask({ message: `CLI author name?` });
  const authorEmail = await ask({ message: `CLI author email?` });
  const authorURL = await ask({ message: `CLI author URL?` });
  const license = await ask({ message: `License`, initial: 'UNLICENSED' });

  const vars = { name, license, description, version, authorName, authorEmail, authorURL, command: command ? command : name };
  return vars;
};
