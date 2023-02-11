const express = require('express');
const usersRoutes = require('./userRoutes');

const routers = express.Router();

routers.use('/users', usersRoutes);

module.exports = routers;