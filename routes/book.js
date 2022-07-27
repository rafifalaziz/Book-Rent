const express = require('express');
const {book} = require('../controller')

const routes = express.Router();

routes.post('/create', book.addBook);
routes.patch('/edit/:id', book.editBook);
routes.delete('/delete/:id', book.deleteBook);
routes.get('/get', book.getAllBook);
routes.get('/get/:id', book.getBook);


module.exports = routes;