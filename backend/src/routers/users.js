const express = require("express");

const usersRouter = express.Router();

const {
  validateLogin,
  validateUser,
  checkAuth,
  decodeCookie,
} = require("../middlewares/userMiddleware");

const { UserController } = require("../controllers");

usersRouter.get("/user/:id", checkAuth, decodeCookie, UserController.read);

usersRouter.post("/login", validateLogin, UserController.login);
usersRouter.post("/user/add", validateUser, UserController.add);

usersRouter.put("/user/update/:id", checkAuth, UserController.edit);

module.exports = usersRouter;
