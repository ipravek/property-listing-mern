const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db/db");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const rfs = require("rotating-file-stream");
const cors = require("cors");

// Db connection
db.connect();

// Logger
const accessLogStream = rfs.createStream("access.log", {
  interval: "12M",
  path: path.join(__dirname, "log"),
});

app.use(
  morgan("combined", {
    stream: accessLogStream,
  })
);

// CORS
app.use(cors());

// Body Parser
app.use(express.json());

// Routers
const propertyRouter = require("./router/property.router");

app.use("/api/property", propertyRouter);

app.get("", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

module.exports = app;
