const router = require('express').Router();
const blogPostController = require('../controllers/blogPost.controller');
const auth = require('../middlewares/auth.middleware');

// router.post('/', auth.authMiddleware, blogPostController.createPost);
router.get('/', auth.authMiddleware, blogPostController.getAllPost);
router.get('/:id', auth.authMiddleware, blogPostController.findById);

module.exports = router;