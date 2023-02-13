const { User } = require('../models');
// const userSchema = require('../schemas/User');
const auth = require('../utils/auth');

// const loginUser = async (email, password) => {
//   const { type, message } = userSchema.validateLogin(email, password);
//   if (type) return { type, message };

//   const loggedIn = await User.findOne({ where: { email, password } });
//   if (!loggedIn || password !== loggedIn.password) {
//     return { type: 400, message: 'Invalid fields' };
//   }

//   const token = jwt.createToken(email);

//   return { type: null, message: token };
// };

const loginUser = async (email, password) => {
  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  const loggedIn = await User.findOne({ where: { email, password } });
  if (!loggedIn) {
    return { type: 400, message: 'Invalid fields' };
  }

  const token = auth.createToken(email);

  return { type: null, message: token };
};

module.exports = {
  loginUser,
};
