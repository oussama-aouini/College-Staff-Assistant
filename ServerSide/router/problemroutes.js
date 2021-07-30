const express = require('express');
const router = express.Router();
const problemController = require('../Controllers/problemController');

router.post('/ajouteproblem',problemController.ajoutproblem)

router.get('/problemlist',problemController.problemlist)

module.exports = router;