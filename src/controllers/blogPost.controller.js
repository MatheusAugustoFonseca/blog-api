const blogPostService = require('../services/blogPost.service');

// const createPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;

//   const { type, message } = await blogPostService.createPost(title, content, categoryIds);
//   if (type) {
//     return res.status(400).json({ message });
//   }

//   return res.status(201).json({ message });
// };
const getAllPost = async (_req, res) => {
 const result = await blogPostService.getAllPost();
 return res.status(200).json(result);
};

module.exports = {
  // createPost,
  getAllPost,
};

// {
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "categoryIds": [1, 2]
// }