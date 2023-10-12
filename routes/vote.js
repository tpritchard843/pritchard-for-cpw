const express = require('express');
const router = express.Router();

const voteController = require('../controllers/vote.js');

router.get('/', voteController.getVote);

module.exports = router;
