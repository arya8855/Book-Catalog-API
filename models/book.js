const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const book = mongoose.model("Book", bookSchema);

module.exports = book;