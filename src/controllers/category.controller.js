const categoryService = require('../services/category.service');

const categoryCreate = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await categoryService.categoryCreate(name); 
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(201).json({ id, name: message });
};

module.exports = {
  categoryCreate,
};
