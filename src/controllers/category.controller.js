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

const getCategories = async (req, res) => {
    const result = await categoryService.getCategories();
    return res.status(200).json(result);
};

module.exports = {
  categoryCreate,
  getCategories,
};
