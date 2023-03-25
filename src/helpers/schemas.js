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

const postValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).min(1).required(),
});

const editPostValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  loginValidation,
  userValidation,
  postValidation,
  editPostValidation,
};