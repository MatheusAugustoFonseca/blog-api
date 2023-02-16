const userService = require('../services/user.service');

const userCreate = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.userCreate(displayName, email, password, image); 
  // try (req.body)
  if (type) {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await userService.loginUser(email, password);

  if (type) {
    return res.status(400).json({ message });
  }
  // const { token } = await userService.loginUser({ email, password });
  // if (type) {
  // }
  return res.status(200).json({ token: message });
};

const getAll = async (_req, res) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  // const { type, message } = await userService.findById(id);
  // if (type) res.status(type).json({ message });
  // return res.status(200).json(message);
  const { type, message } = await userService.findById(id);
  if (type) {
    return res.status(404).json({ message });
  }

  // if (!result) res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { type } = await userService.deleteUser(id);
  if (!type) return res.status(204).end();
  };

module.exports = {
  userCreate,
  loginUser,
  getAll,
  findById,
  deleteUser,
};
