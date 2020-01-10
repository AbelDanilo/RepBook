const express = require('express');
const router = express.Router();
const Book = require('../models/book');
//routes
router.get('/', (req, res) => {
    //dbBook.
    res.render('index');
});
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/ejm2', (req, res) => {
    res.render('ejm2');
});
//form
/*router.post('/data', (req, res) => {
    // req
    console.log(req.body);
    /*const { titulo, descripcion } = req.body;
    const errors = [];
    if (!titulo) {
        errors.push({ text: 'Escribe Titulo' })
    }
    if (!descripcion) {
        errors.push({ text: 'Escribe Desc' })
    }
    res.render('/new_notes', {
        errors,
        tema,
        description
    });
    res.send('ok');
});*/


module.exports = router;