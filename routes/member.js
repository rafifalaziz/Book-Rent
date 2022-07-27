const express = require('express');
const {member} = require('../controller')
const {memberBook} = require('../middleware/memberBookCount');

const routes = express.Router();

routes.post('/create', member.addMember);
routes.patch('/edit/:id', member.editMember);
routes.delete('/delete/:id', member.deleteMember);
routes.get('/get', member.getAllMember);
routes.get('/get/:id', member.getMember);
routes.get('/borrow/:member/:book', memberBook, member.borrow);



module.exports = routes;