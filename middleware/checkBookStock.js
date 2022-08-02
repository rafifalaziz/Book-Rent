const model = require('../models');
const {BOOK} = model.init;

const bookStock = async (req, res, next) => {
    try {
        const book = await BOOK.findOne({
            where: {
                book_id: req.params.book,
            },
        });
        if(book.dataValues.stock===0){
            return res.status(400).send({
                status: 400,
                message: "Book stock empty",
            });
        }
        else{
            next()    
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to borrow',
            code: 500,
            error,
        });
    }
    
}

module.exports = {bookStock};