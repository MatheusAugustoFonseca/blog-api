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

module.exports = {
  userCreate,
  loginUser,
};
