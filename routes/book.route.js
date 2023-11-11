const router = require('express').Router();
const book = require('../controllers/book.controller');
const parser = require('body-parser')

router.get('/', book.getAllBooks);
router.get('/:id', book.getOneBook);
router.post('/', book.createBook);
router.put('/:id', book.updateBook);
router.delete('/:id', book.deleteBook);

module.exports = router;