const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth.authMiddleware, categoryController.categoryCreate);

module.exports = router;