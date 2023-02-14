const { Category } = require('../models');

const categoryCreate = async (name) => {
  if (!name) {
    return { type: 400, message: '"name" is required' };
  }
  await Category.create({ name });
  return { type: null, message: name };
};

module.exports = {
  categoryCreate,
};
