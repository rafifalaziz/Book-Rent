const sequelize = require('sequelize');
const model = require('../models');
const {BORROW} = model.init;

const memberBook = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
    const memberCountBorrow = await BORROW.findOne({
        attributes: [
            [sequelize.fn(
                'COUNT', 
                sequelize.col('member_member_id')
            ), 'book_count']
        ],
        where: {
            member_member_id: req.params.member
        },
    });
    if(memberCountBorrow.dataValues.book_count<2){
        next()
    }
    else{
        return res.status(400).send({
            status: 400,
            message: "Book more than 2",
        });
    }
}

module.exports = {memberBook};