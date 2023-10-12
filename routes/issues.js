const express = require('express');
const router = express.Router();

const issuesController = require('../controllers/issues.js');

router.get('/', issuesController.getIssues);

module.exports = router;
