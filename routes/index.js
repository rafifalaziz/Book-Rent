const express = require("express");

const routes = express.Router();

routes.use('/test', test);

function test(){
    console.log("test");
}

module.exports = routes;