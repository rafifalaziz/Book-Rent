const express = require("express");
const book = require("./book");
const member = require("./member");

const routes = express.Router();

routes.use('/book', book);
routes.use('/member', member);


module.exports = routes;