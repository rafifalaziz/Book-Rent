const sequelize = require('sequelize');
const model = require('../models');
const {BORROW} = model.init;

const memberBook = async (req, res, next) => {
    try {
        const memberCountBorrow = await BORROW.findOne({
            attributes: [
                [sequelize.fn(
                    'COUNT', 
                    sequelize.col('member_member_id')
                ), 'book_count']
            ],
            where: {
                member_member_id: req.params.member,
                returned: false,
            },
        });
        if(memberCountBorrow.dataValues.book_count<2){
            next()
        }
        else{
            return res.status(400).send({
                status: 400,
                message: "can't borrow book more than two",
            });
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

module.exports = {memberBook};