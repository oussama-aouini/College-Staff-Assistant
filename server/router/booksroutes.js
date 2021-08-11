const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/booksController');



router.post('/ajoutlivre',booksController.ajoutlivre)

router.get('/listlivre', booksController.listlivre)

module.exports = router;