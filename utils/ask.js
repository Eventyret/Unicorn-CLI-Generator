const { Input } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');

module.exports = async ({ message, hint }) => {
  const [err, response] = await to(new Input({ message, hint }).run());

  handleError(`INPUT`, err);
  return response;
};
