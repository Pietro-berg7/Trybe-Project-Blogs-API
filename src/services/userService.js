const { User } = require('../models');
const { generateToken } = require('../helpers/JWT');

const userPost = async ({ displayName, email, password, image }) => {
  const userInfo = { displayName, email, password, image };
  const userAlreadyExists = await User.findOne({ where: { email } });

  if (userAlreadyExists) {
    return {
      status: 409,
      response: { message: 'User already registered' },
    };
  }

  await User.create(userInfo);

  return {
    status: 201,
    response: { token: generateToken(email) },
  };
};

module.exports = { userPost };