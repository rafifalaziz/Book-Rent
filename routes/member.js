const express = require('express');
const {member} = require('../controller')
const {memberBook} = require('../middleware/memberBookCount');
const {bookStock} = require('../middleware/checkBookStock');

const routes = express.Router();

routes.post('/create', member.addMember);
routes.patch('/edit/:id', member.editMember);
routes.delete('/delete/:id', member.deleteMember);
routes.get('/get', member.getAllMember);
routes.get('/get/:id', member.getMember);
routes.get('/borrow/:member/:book', bookStock, memberBook, member.borrow);
routes.get('/return/:id', member.return);



module.exports = routes;