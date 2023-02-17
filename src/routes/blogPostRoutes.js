const router = require('express').Router();
const blogPostController = require('../controllers/blogPost.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/search', auth.authMiddleware, blogPostController.searchByQuery);
router.post('/', auth.authMiddleware, blogPostController.createPost);
router.get('/', auth.authMiddleware, blogPostController.getAllPost);
router.get('/:id', auth.authMiddleware, blogPostController.findById);
// router.put('/:id', auth.authMiddleware, blogPostController.editPost);

module.exports = router;