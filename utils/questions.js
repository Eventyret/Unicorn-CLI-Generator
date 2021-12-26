const ask = require('./ask');

module.exports = async () => {
  const name = await ask({
    name: `name`,
    message: `CLI name?`,
    hint: `e.g. unicorn-cli (kebab-case only)`
  });
  const command = await ask({
    name: `command`,
    message: `CLI command?`,
    hint: `(optional: if different from CLI name)`
  });
  const description = await ask({
    name: `description`,
    message: `CLI description?`
  });
  const version = await ask({
    name: `version`,
    message: `CLI version?`,
    initial: `1.0.0`
  });

  const authorName = await ask({
    name: `authorName`,
    message: `CLI author name?`
  });
  const authorEmail = await ask({
    name: `authorEmail`,
    message: `CLI author email?`
  });
  const authorURL = await ask({
    name: `authorURL`,
    message: `CLI author URL?`
  });
  const license = await ask({
    name: `license`,
    message: `License`,
    initial: 'UNLICENSED'
  });

  const vars = {
    name,
    license,
    description,
    version,
    authorName,
    authorEmail,
    authorURL,
    command: command ? command : name
  };
  return vars;
};
