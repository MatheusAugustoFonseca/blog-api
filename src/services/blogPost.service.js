const { BlogPost, User, Category } = require('../models');

// const createPost = async (title, content, categoryIds) => {
//   const newPost = await BlogPost.create({ title, content, categoryIds });
//   return { type: null, message: newPost };
// };

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

module.exports = {
  // createPost,
  getAllPost,
  findById,
};