// const { generateToken } = require('../helpers/JWT');
const { loginService } = require('../services');

const loginPost = async (req, res) => {
  const { status, response } = await loginService.loginPost(req.body);
  
  res.status(status).json(response);
};

module.exports = { loginPost };