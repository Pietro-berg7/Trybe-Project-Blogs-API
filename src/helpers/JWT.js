const jwt = require('jsonwebtoken');

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
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { 
  generateToken,
  authenticateToken,
};