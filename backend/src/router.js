const express = require("express");

// const { validateKid } = require("./middlewares/kidMiddleware");
const {
  validateUser,
  validateLogin,
  checkAuth,
  // checkAdminRights,
  decodeCookie,
  checkAdminRights,
} = require("./middlewares/userMiddleware");

// const Kid = require("./models/Kid");

const {
  UserController,
  KidController,
  ContractControllers,
} = require("./controllers");

const router = express.Router();

// get // post // put // delete

router.get("/user", checkAuth, checkAdminRights, UserController.browse);
router.get("/user/:id", checkAuth, decodeCookie, UserController.read);
router.get("/kid/:id", checkAuth, decodeCookie, KidController.edit);
router.get("/contract/:id", checkAuth, decodeCookie, ContractControllers.edit);

router.post("/signup", validateUser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.post("/user", UserController.add);
router.put("/user/update/:id", checkAuth, UserController.edit);

router.post("/kid", KidController.add);
router.put("/kid/update/:id", checkAuth, KidController.edit);

router.post("/contract", ContractControllers.add);
router.put("/contract/update/:id", checkAuth, ContractControllers.edit);

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
