const express = require('express');
const register = require('../controllers/authentication/register');
const router = express.Router()

router.route('/register').post(register);

module.exports = router;