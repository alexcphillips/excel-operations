const express = require("express");
const morgan = require("morgan");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

module.exports = app;
