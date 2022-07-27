const model = require('../models');
const {BOOK} = model.init;

exports.addBook = async (req, res) => {
    try {
        const book = await BOOK.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Succes to create book',
            code: 200,
            data: book,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to create book',
            code: 500,
            error,
        });
    }
}

exports.editBook = async (req, res) => {
    try {
        const book = await BOOK.update({...req.body}, {where: {book_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to edit book',
            code: 200,
            count_edited: book,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to edit book',
            code: 500,
            error,
        });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        await BOOK.destroy({where: {book_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to delete book',
            code: 200,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to delete book',
            code: 500,
            error,
        });
    }
}

exports.getBook = async (req, res) => {
    try {
        const book = await BOOK.findOne({where: {book_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to get a book',
            code: 200,
            data: book,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to get a book',
            code: 500,
            error,
        });
    }
}

exports.getAllBook = async (req, res) => {
    try {
        const book = await BOOK.findAll();
        res.status(200).send({
            success: true,
            message: 'Succes to get all book',
            code: 200,
            data: book,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to get all book',
            code: 500,
            error,
        });
    }
}