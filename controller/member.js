const sequelize = require('sequelize');
const model = require('../models');
const {MEMBER, BORROW} = model.init;

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
        const member = await MEMBER.findAll();
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
        const borrow = await BORROW.create({
            book_book_id: req.params.book,
            member_member_id: req.params.member,
            time: Date.now(),
        });
        res.status(200).send({
            success: true,
            message: 'Succes to get all member',
            code: 200,
            data: borrow,
        })
    } catch (error) {
        console.log(error);
    }
}