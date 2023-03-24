const jwt = require('jsonwebtoken');

const generateToken = (userEmail) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: userEmail } }, secret, jwtConfig);

  return token;
};

module.exports = { generateToken };