const { userService } = require('../services');

const userPost = async (req, res) => {
  const { status, response } = await userService.userPost(req.body);

  res.status(status).json(response);
};

module.exports = { userPost };