// const express = require('express');
// const usersRoutes = require('./loginRoutes');

// const routers = express.Router();

// routers.use('/users', usersRoutes);

// module.exports = routers;

const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const categories = require('./categoriesRoutes');
const blogPost = require('./blogPostRoutes');

module.exports = {
  loginRoutes,
  userRoutes,
  categories,
  blogPost,
};
