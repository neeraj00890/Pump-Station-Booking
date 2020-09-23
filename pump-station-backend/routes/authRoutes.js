
const express = require('express');
const router = express.Router();


const authController = require('../controller/authController')


router.post('/register',authController.registerUser);
router.post('/login',authController.performLogin);

module.exports = router;