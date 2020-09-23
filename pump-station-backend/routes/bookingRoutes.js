const express = require('express');
const router = express.Router();


const bookController = require('../controller/bookController');
router.post('/bookSlot',bookController.bookSlot);
router.get('/gridData',bookController.gridData);
module.exports = router;

