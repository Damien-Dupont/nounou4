const express = require("express");

const {
  validateUser,
  validateLogin,
  checkAuth,
  // checkAdminRights,
  decodeCookie,
  // checkAdminRights,
} = require("./middlewares/userMiddleware");

const {
  validateContract,
  prepareData,
} = require("./middlewares/contractMiddleware");

const {
  UserController,
  KidController,
  ContractController,
} = require("./controllers");

const router = express.Router();

// get // post // put // delete

// router.get("/user", checkAuth, checkAdminRights, UserController.browse);
router.get("/user/:id", checkAuth, decodeCookie, UserController.read);
router.get("/kid/all", KidController.browse);
router.get("/kid/parent/:id", KidController.browseByParent);
// router.get("/contract/:id", checkAuth, decodeCookie, ContractControllers.edit);

// router.post("/signup", validateuser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.post("/user/add", validateUser, UserController.add);
router.put("/user/update/:id", checkAuth, UserController.edit);

router.post("/kid/add", KidController.add);
router.put("/kid/update/:id", checkAuth, KidController.edit);

router.post(
  "/contract/add",
  prepareData,
  validateContract,
  ContractController.add
);
router.put("/contract/update/:id", checkAuth, ContractController.edit);

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
