const express = require('express');
const { logUserIn, logout } = require('../controllers/authController');

const authRouter = express.Router()

authRouter.post('/logout',logout);
authRouter.post('/login',logUserIn)

module.exports = authRouter;