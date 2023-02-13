const router = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/newUserValidate');
const auth = require('../middlewares/auth.middleware');

router.post('/', validateNewUser, userController.userCreate);
router.get('/', auth.authMiddleware, userController.getAll);

module.exports = router;