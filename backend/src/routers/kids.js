const express = require("express");

const kidsRouter = express.Router();

const {
  validateKid,
  //   checkAuth,
  //   decodeCookie,
} = require("../middlewares/kidMiddleware");

const { KidController } = require("../controllers");

kidsRouter.get("/kid/:id", KidController.read);

kidsRouter.post("/kid/add", validateKid, KidController.add);

kidsRouter.put("/kid/update/:id", KidController.edit);

module.exports = kidsRouter;
