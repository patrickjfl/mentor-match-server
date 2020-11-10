const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mentorsAndBootcampers = require("./routes/mentorsAndBootcampers");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use("/mentorsAndBootcampers", mentorsAndBootcampers);

module.exports = app;
