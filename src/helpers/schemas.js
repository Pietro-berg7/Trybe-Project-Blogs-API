const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userValidation = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categoriesValidation = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  loginValidation,
  userValidation,
  categoriesValidation,
};