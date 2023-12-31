const { User } = require('../models');
const auth = require('../utils/auth');

const loginUser = async (email, password) => {
  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  const result = await User.findOne({ where: { email, password },
     attributes: { exclude: ['password'] } });
  if (!result) {
    return { type: 400, message: 'Invalid fields' };
  }
  console.log(result, 'consolelog no RESULT');

  const token = auth.createToken(result.dataValues);

  return { type: null, message: token };
};

const userCreate = async (displayName, email, password, image) => {
  const sameEmail = await User.findOne({ where: { email } });
  if (sameEmail) { 
    return { type: 409, message: 'User already registered' };
   }
 const { dataValues: { password: p, ...dataValues } } = await User
 .create({ displayName, email, password, image });
  const token = auth.createToken({ ...dataValues });

  return { type: null, message: token };
};

const getAll = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return allUsers;
};

const findById = async (id) => {
  const resultById = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  if (!resultById) { 
    return { type: 404, message: 'User does not exist' };
  }
  return { type: null, message: resultById };
};

const deleteUser = async (id) => {
  // console.log(id);
  await User.destroy({ where: { id } });
  return { type: null };
};

module.exports = {
  loginUser,
  userCreate,
  getAll,
  findById,
  deleteUser,
};
