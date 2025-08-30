const express = require('express');
const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} = require('../Controllers/bookController');


const protected = require('../middleware/auth');

const router = express.Router();

router.get('/',getBooks);
router.get('/:id',getBookById);
router.post('/',protected,createBook);
router.put('/:id',protected,updateBook);
router.delete('/:id',protected, deleteBook);

module.exports = router;
