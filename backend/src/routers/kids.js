const express = require("express");

const kidsRouter = express.Router();

const {
  validateKid,
  //   checkAuth,
  //   decodeCookie,
} = require("../middlewares/kidMiddleware");

const { KidController } = require("../controllers");

kidsRouter.get("/kid/:id", KidController.read);
kidsRouter.get("/kid/parent/:id", KidController.browseByParent);

kidsRouter.post("/kid/add", validateKid, KidController.add);
kidsRouter.delete("/kid/:id", KidController.delete);

// kidsRouter.put("/kid/update/:id", KidController.edit);

module.exports = kidsRouter;
