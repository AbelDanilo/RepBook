const express = require('express');
const router = express.Router();
const Book = require('../models/book');
let msj = "";
//routes
router.get('/form', (req, res) => {
    res.render('form', { head: 'Agregar Libro', message: msj });
    msj = "";
});

router.post('/form', (req, res, next) => {
    console.log(req.body);

    if (req.body._id === "") {
        const newBook = new Book({
            id: req.body.id,
            titulo: req.body.titulo,
            autor: req.body.autor,
            editorial: req.body.editorial,
            tipoIN: req.body.tipoIN
        });
        newBook.save(function(err, person) {
            if (err) {
                msj = "El MNF ya se encuentra en uso."
                res.redirect('');
            } else {
                res.redirect('reg');
            }
        });
    } else {
        Book.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) {
                msj = "El MNF ya se encuentra en uso."
                res.redirect('');
            } else {
                res.redirect('reg');
            }
        });
    }
});
router.get('/reg', (err, res) => {
    const all = Book.find({}, (err, books) => {
        if (err) throw err;
        res.render('reg', {
            book: books,
        });

    });
    //res.render('reg', { all });
});
router.get('/reg/eliminar/:id', (req, res, next) => {
    const id = req.params.id;
    Book.remove({ id: id }, (err) => {
        if (err) throw err;
        res.redirect('/reg');
    });
});
router.get('/reg:id', (req, res, next) => {
    const id = req.params.id;
    Book.findOne({ id: id }, (err, book) => {
        if (err) throw err;
        res.render('form', { book: book, head: 'Editar Libro' });
    });
});


module.exports = router;