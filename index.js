const express = require("express");
const app = express();
const routes = require('./routes');

require('dotenv').config({ path: __dirname+'/.env' });

const port = process.env.PORT;

app.use(express.json());
app.use('/', routes);
app.listen(port);

console.log(`port listen at ${port}`);