const Book = require('../models/book');

exports.createBook = async(req, res) => {
    try {
       const {title, author, description, publishedYear} = req.body;

       if(!title || !author || !description || !publishedYear){
          return res.status(400).json({message:"All fields are required"});
       }
       
       const book = await Book.create({...req.body});
       res.status(201).json({message:"Created Successfully", book});

    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

//Get all books:-
exports.getBooks = async(req, res) => {
    const books = await Book.find();
    res.json(books);
}

//Get book by Id:-
exports.getBookById = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({message:"Book not found"})
        };
        res.json(book);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//Update book:--
exports.updateBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book) return res.status(404).json({message:"Book not found"});
        res.json(book);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//Delete book:-
exports.deleteBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) return res.status(404).json({message: "Book not found"});
        res.json({message: "Book removed"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}