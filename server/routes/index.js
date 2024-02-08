const express = require('express');
const register = require('../controllers/authentication/register');
const login = require('../controllers/authentication/login');
const router = express.Router()

router.route('/register').post(register);

router.route('/login').post(login);

module.exports = router;