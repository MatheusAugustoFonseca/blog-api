const validateFile = require('../utils/auth');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
    const user = validateFile.validateToken(authorization);
    if (!user.email) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  req.user = user;

    next();
};

module.exports = {
  authMiddleware,
};
