const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { 
    email,
   };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const validateToken = (token) => {
  // console.log(token);
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    return decoded;
  } catch (error) {
    return { type: 401, message: 'Invalid token' };
  }
  // return decoded;
};

module.exports = {
  createToken,
  validateToken,
};