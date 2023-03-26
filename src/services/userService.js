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

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });

  return { status: 200, response: allUsers };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });

  if (!user) return { status: 404, response: { message: 'User does not exist' } };

  return { status: 200, response: user };
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  userPost,
  getAllUsers,
  getUserById,
  deleteUser,
};