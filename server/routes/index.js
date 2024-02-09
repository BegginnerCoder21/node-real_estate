const express = require('express');
const register = require('../controllers/authentication/register');
const login = require('../controllers/authentication/login');
const getProperties = require('../controllers/property/getProperties');
const featuredProperty = require('../controllers/property/FeaturedProperty');
const specificProperty = require('../controllers/property/specificProperty');
const numberTypeProperty = require('../controllers/property/numberTypeProperty');
const getProperty = require('../controllers/property/getProperty');
const router = express.Router()

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/all-properties').get(getProperties);

router.route('/find/featured-properties').get(featuredProperty);

router.route('/find-specific-property').get(specificProperty);

router.route('/find/number-type').get(numberTypeProperty);

router.route('/find-property/:id').get(getProperty);

module.exports = router;