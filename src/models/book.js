const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaBook = new Schema({
    id: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editorial: { type: String, required: true },
    tipoIN: { type: String, required: true }
}, { versionKey: false });

let Book = mongoose.model('Book', schemaBook);

module.exports = Book;