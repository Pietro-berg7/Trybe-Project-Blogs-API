const {
  editPostValidation,
} = require('../helpers/schemas');

module.exports = async (req, res, next) => {
  const input = req.body;

  const { error } = editPostValidation.validate(input);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};