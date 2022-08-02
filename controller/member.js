const sequelize = require('sequelize');
const model = require('../models');
const {MEMBER, BORROW, BOOK} = model.init;

exports.addMember = async (req, res) => {
    try {
        const member = await MEMBER.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Succes to create member',
            code: 200,
            data: member,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to create member',
            code: 500,
            error,
        });
    }
}

exports.editMember = async (req, res) => {
    try {
        const member = await MEMBER.update({...req.body}, {where: {member_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to edit member',
            code: 200,
            count_edited: member,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to edit member',
            code: 500,
            error,
        });
    }
}

exports.deleteMember = async (req, res) => {
    try {
        await MEMBER.destroy({where: {member_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to delete member',
            code: 200,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to delete member',
            code: 500,
            error,
        });
    }
}

exports.getMember = async (req, res) => {
    try {
        const member = await MEMBER.findOne({where: {member_id: req.params.id}});
        res.status(200).send({
            success: true,
            message: 'Succes to get a book',
            code: 200,
            data: member,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to get a member',
            code: 500,
            error,
        });
    }
}

exports.getAllMember = async (req, res) => {
    try {
        const member = await MEMBER.findAll({
            include: {
                model: BORROW,
                as: 'borrows',
                }
            }
        );
        res.status(200).send({
            success: true,
            message: 'Succes to get all member',
            code: 200,
            data: member,
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

exports.borrow = async (req, res) => {
    try {
        const member = await MEMBER.findOne({
            where: {member_id: req.params.member}
        });
        if(member.dataValues.penalize != null){
            const now = new Date();
            const countDay = (now.getTime() - member.dataValues.penalize.getTime())/(1000*3600*24);
            if(countDay<3){
                res.status(500).send({
                    success: false,
                    message: 'Still penalize',
                    code: 500,
                });
                return;
            }
        }
        const borrow = await BORROW.create({
            book_book_id: req.params.book,
            member_member_id: req.params.member,
            time: new Date(),
        });
        const book = await BOOK.findOne({where: {
            book_id: req.params.book,
        }})
        await BOOK.update({stock: book.dataValues.stock - 1}, {where: {
            book_id: req.params.book,
        }})
        console.log(book);
        res.status(200).send({
            success: true,
            message: 'Succes to borrow',
            code: 200,
            data: borrow,
        });
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

exports.return = async (req, res) => {
    try {
        const borrow = await BORROW.findOne({
            where: {
                borrow_id: req.params.id,
                returned: null,
            }
        })
        if(borrow){
            await BORROW.update(
                {
                    returned: true,
                },
                {
                where: {
                    borrow_id: req.params.id,
                }
            });
            const now = new Date();
            const countDay = (now.getTime() - borrow.dataValues.time.getTime())/(1000*3600*24);
            if(countDay>7){
                await MEMBER.update(
                    {
                        penalize: new Date(),
                    },
                    {
                        where: {
                            member_id: borrow.dataValues.member_member_id
                        }
                    }
                    
                );
            }
            const book = await BOOK.findOne({where: {book_id: borrow.dataValues.book_book_id}});
            await BOOK.update({
                stock: book.dataValues.stock + 1,
            },
            {
                where: {book_id: borrow.dataValues.book_book_id},
            }
            );
            res.status(200).send({
                success: true,
                message: 'Succes to return book',
                code: 200,
            });
        }
        else {
            return res.status(400).send({
                status: 400,
                message: "Don't have the book",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Fail to return',
            code: 500,
            error,
        });
    }
}