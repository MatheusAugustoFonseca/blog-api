const validateFile = require('../utils/auth');

const authMiddleware = (req, res, next) => {
  // const token = req.headers.authorization;
  const { authorization } = req.headers;

  // console.log(token);
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  // try {
  //   const { email } = validateFile.validateToken(authorization);
  //   if (!email) {
  //     return res.status(401).json({ message: 'Expired or invalid token' });
  //   }
  //   // console.log(email);
  // req.user = { email };

  //   return next();
  // } catch (error) {
  //   // console.log(error);
  //  return res.status(401).json({ message: 'Expired or invalid token' });
  // }
    const user = validateFile.validateToken(authorization);
    // console.log(password, 'password');
    if (!user.email) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    // console.log(email);
  req.user = user;

    next();
    // console.log(error);
};

module.exports = {
  authMiddleware,
};

// const validateFile = require('../utils/auth');

// const auth = (req, res, next) => {
//     const { authorization } = req.headers;

//     if (!authorization) {
//       return res.status(401).json({ message: 'Token not found' });
//     }

//     const { type, message, user } = validateFile.validateToken(authorization);
//     if (!user) {
//       return res.status(type).json({ message });
//     }
//     req.user = user;
//     next();

//   //  return res.status(401).json({ message: 'Expired or invalid token' });
// };

// module.exports = {
//   auth,
// };