require("dotenv").config();
const express = require("express");

const fs = require("fs");
const path = require("path");
const cors = require("cors");

const contractsRouter = require("./routers/contracts");
// const usersRouter = require('./routes/users')
const router = require("./router");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
// eslint-disable-next-line func-names
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);
app.use(`/contract/add`, contractsRouter);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
