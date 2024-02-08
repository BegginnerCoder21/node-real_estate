const express = require('express');
const register = require('../controllers/authentication/register');
const login = require('../controllers/authentication/login');
const getProperty = require('../controllers/property/getProperty');
const featuredProperty = require('../controllers/property/FeaturedProperty');
const router = express.Router()

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/all-properties').get(getProperty);

router.route('/find/featured-properties').get(featuredProperty);

module.exports = router;