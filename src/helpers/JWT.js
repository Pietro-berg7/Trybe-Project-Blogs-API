const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const generateToken = (userEmail) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: userEmail } }, secret, jwtConfig);

  return token;
};

const authenticateToken = (token) => {
  try {
    const objUser = jwt.verify(token, secret);
    return { isValidToken: true, objUser };
  } catch (error) {
    return false;
  }
};

const getUser = async (token) => {
  const { data } = jwt.verify(token, secret);
  const { email } = data;
  const user = await User.findOne({ where: { email } });
  const userId = user.dataValues.id;  
  return userId;
};

module.exports = { 
  generateToken,
  authenticateToken,
  getUser,
};