const router = require('express').Router();
// const userController = require('../controllers/user.controller');
const userController = require('../controllers/user.controller');

// router.post('/', userController.userCreate);
router.post('/', userController.loginUser);

module.exports = router;