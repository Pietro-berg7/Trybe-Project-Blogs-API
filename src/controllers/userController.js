const { userService } = require('../services');

const userPost = async (req, res) => {
  const { status, response } = await userService.userPost(req.body);

  res.status(status).json(response);
};

const getAllUsers = async (req, res) => {
  const { status, response } = await userService.getAllUsers(req.body);

  res.status(status).json(response);
};

const getUserById = async (req, res) => {
  const { status, response } = await userService.getUserById(req.params.id);

  res.status(status).json(response);
};

module.exports = { 
  userPost,
  getAllUsers,
  getUserById,
};