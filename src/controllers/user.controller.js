const userService = require('../services/user.service');

const userCreate = async (req, res) => {
  const user = await userService.userCreate(req.body);
  return res.status(201).json(user);
};

module.exports = {
  userCreate,
};
