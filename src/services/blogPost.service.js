const { BlogPost, User, Category, PostCategory } = require('../models');

const createPost = async ({ userId, title, content, categoryIds }) => {
  // console.log();
  // console.log(userId, 'userid blogpost service');
  if (!title || !content || !categoryIds || !categoryIds.length) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  const newPost = await BlogPost.create({ userId, title, content });
  const categoryIdsSave = categoryIds.map((e) => ({ postId: newPost.id, categoryId: e }));
  await PostCategory.bulkCreate(categoryIdsSave);
  return { type: null, message: newPost };
  // return newPost; 
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

module.exports = {
  createPost,
  getAllPost,
  findById,
};