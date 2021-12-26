const { Input } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');

module.exports = async ({ message, hint, initial }) => {
  const [err, response] = await to(
    new Input({
      message,
      hint,
      initial,
      validate(value) {
        return !value ? `Please add value.` : true;
      },
    }).run()
  );

  handleError(`INPUT`, err);
  return response;
};
