const { Category } = require('../models');

const categoryCreate = async (name) => {
  if (!name) {
    return { type: 400, message: '"name" is required' };
  }
  await Category.create({ name });
  return { type: null, message: name };
};

const getCategories = async () => {
  const allCategories = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return allCategories;
};

module.exports = {
  categoryCreate,
  getCategories,
};
