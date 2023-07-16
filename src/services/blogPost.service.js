const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

const validateCategoryIds = async (categoryIds) => {
  const allCategories = await Category.findAll();
  const allCategoriesId = allCategories.map((category) => category.id);
  const isValidIds = categoryIds.every((categoryId) => allCategoriesId.includes(categoryId));
  return isValidIds;
    // await PostCategory.findByPk(categoryIds.map((e) => e));
};

const valideateFields = async (userId, title, content, categoryIds) => {
  if (!title || !content || !categoryIds || !categoryIds.length) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  return { type: null, message: '' };
};

const createPost = async ({ userId, title, content, categoryIds }) => {
  const { type, message } = valideateFields(userId, title, content, categoryIds);
  if (type) return { type, message };
  if (categoryIds.length === 0) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  const isValidId = await validateCategoryIds(categoryIds);
  // console.log(isValidId);
  if (!isValidId) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  const newPost = await BlogPost.create({ userId, title, content }); 
  const categoryIdsSave = categoryIds.map((e) => ({ postId: newPost.id, categoryId: e }));
  await PostCategory.bulkCreate(categoryIdsSave);
  return { type: null, message: newPost };
}; 

const getAllPost = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return allPosts;
};

const findById = async (id) => {
  const searchedId = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  if (!searchedId) {
    return { type: 404, message: 'Post does not exist' };
  }
  return { type: null, message: searchedId };
};

const searchByQuery = async ({ q }) => {
  const post = await BlogPost.findAll({
    where: { 
      [Op.or]: [
      { title: { [Op.substring]: q },
     },
     {
      content: { [Op.substring]: q },
     },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
  });
  return { type: null, message: post };
};

const deletePost = async (id, email) => {
  const userByEmail = await User.findOne({ where: { email } });
  const postToDelete = await BlogPost.findByPk(id);

  if (!postToDelete) {
    return { type: 404, message: 'Post does not exist' };
  }
  if (userByEmail.id !== postToDelete.userId) {
    return { type: 401, message: 'Unauthorized user' };
  }
  await BlogPost.destroy({ where: { id } });
  return { type: null };
};

module.exports = {
  createPost,
  getAllPost,
  findById,
  searchByQuery,
  deletePost,
};