const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./network/routes");
const errors = require("./middlewares/errors");

const app = express();

//middlewares
app.use(cors());
//cors
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true })); // usar query como peticion
app.use(bodyParser.json({ limit: "2mb" })); // usar json como peticion con limite a 2mb
app.disable("x-powered-by"); // desabilitar valor de cabecera res.header()

//routes
routes(app);

//middlexares control de errors
app.use(errors);

module.exports = app;