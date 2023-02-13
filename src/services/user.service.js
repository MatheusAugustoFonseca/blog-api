const { User } = require('../models');
const auth = require('../utils/auth');

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

const userCreate = async (displayName, email, password, image) => {
  const sameEmail = await User.findOne({ where: { email } });
  if (sameEmail) { 
    return { type: 409, message: 'User already registered' };
   }
 await User.create({ displayName, email, password, image });
  const token = auth.createToken(email); // check

  return { type: null, message: token };
};

module.exports = {
  loginUser,
  userCreate,
};
