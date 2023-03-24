const { User } = require('../models');
const { generateToken } = require('../helpers/JWT');

const loginPost = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 400, response: { message: 'Invalid fields' } };
  }

  return { status: 200, response: { token: generateToken(user.email) } };
};

module.exports = {
  loginPost,
};