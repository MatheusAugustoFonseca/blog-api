const router = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/newUserValidate');

router.post('/', validateNewUser, userController.userCreate);

module.exports = router;