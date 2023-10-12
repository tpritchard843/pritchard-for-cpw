const express = require('express');
const router = express.Router();

const aboutController = require('../controllers/about.js');

router.get('/', aboutController.getAbout);

module.exports = router;
