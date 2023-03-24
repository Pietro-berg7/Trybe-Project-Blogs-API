const {
  userValidation,
} = require('../helpers/schemas');

module.exports = async (req, res, next) => {
  const input = req.body;

  const { error } = userValidation.validate(input);

  if (error) return res.status(400).json({ message: error.message });

  next();
};