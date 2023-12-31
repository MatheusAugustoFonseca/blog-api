const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;
  const { type, message } = await blogPostService
  .createPost({ userId: Number(id), title, content, categoryIds });
  if (type) {
    return res.status(400).json({ message });
  }

  return res.status(201).json(message);
};

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

const searchByQuery = async (req, res) => {
  const { query: { q } } = req;
  const { message } = await blogPostService.searchByQuery({ q });
  return res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;
  const { type, message } = await blogPostService.deletePost(id, email);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(204).end();
  };

module.exports = {
  createPost,
  getAllPost,
  findById,
  searchByQuery,
  deletePost,
};
