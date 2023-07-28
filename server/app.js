const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db/db");

// Db connection
db.connect();

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
