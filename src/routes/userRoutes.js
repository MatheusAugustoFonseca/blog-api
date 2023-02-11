const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.userCreate);

module.exports = router;