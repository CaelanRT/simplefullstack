const express = require('express');

const {registerController, protectedController} = require('../controllers/authController');

const router = express.Router();

router.route('/register').post(registerController);
router.route('/protected').get(protectedController)

module.exports = router;