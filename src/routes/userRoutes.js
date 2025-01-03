const express = require('express');
const { newUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/',newUser);

module.exports = userRouter;