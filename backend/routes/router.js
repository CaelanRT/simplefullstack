const express = require('express');

const {registerController} = require('../controllers/authController');

const router = express.Router();

router.route('/register').post(registerController);

module.exports = router;