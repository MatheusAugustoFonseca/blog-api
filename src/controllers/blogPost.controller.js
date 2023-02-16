const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const { id, password } = req.user;
  const { title, content, categoryIds } = req.body;
  console.log(password, 'undfined');
  const { type, message } = await blogPostService
  .createPost({ userId: Number(id), title, content, categoryIds });
  if (type) {
    return res.status(400).json({ message });
  }

  return res.status(201).json(message);
};
// {
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "categoryIds": [1, 2]
// }

const getAllPost = async (_req, res) => {
 const result = await blogPostService.getAllPost();
 return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await blogPostService.findById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = {
  createPost,
  getAllPost,
  findById,
};
