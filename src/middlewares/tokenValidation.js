const { authenticateToken } = require('../helpers/JWT');

module.exports = async (req, res, next) => {
  const token = req.header('authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const isValidToken = authenticateToken(token);

  if (!isValidToken) return res.status(401).json({ message: 'Expired or invalid token' });
  
  next();
};
