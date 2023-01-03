const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const {
  //   ProfileController,
  UserControllers,
  KidControllers,
  ContractControllers,
  //   DiplomeController,
  //   JobController,
  //   PromotionController,
  //   MasterController,
} = require("./controllers");

router.get("/user", UserControllers.browse);
router.get("/user/:id", UserControllers.read);
// router.put("/user/:id", UserControllers.edit);
router.post("/user", UserControllers.add);
// router.delete("/user/:id", UserControllers.destroy);

router.post("/kid", KidControllers.add);

router.post("/contract", ContractControllers.add);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;

// const express = require("express");
// const {
//   validateUser,
//   validateLogin,
//   checkAuth,
//   checkRights,
//   checkVisibility,
//   decodeCookie,
// } = require("./middlewares/userMiddleware");
// const { preparedDataForSignIn } = require("./middlewares/dataMiddleware");

// const {
//   ProfileController,
//   UserController,
//   DiplomeController,
//   JobController,
//   PromotionController,
//   MasterController,
// } = require("./controllers");

// const router = express.Router();

// router.get("/annuaire", decodeCookie, ProfileController.browse);
// router.get(
//   "/annuaire/:id",
//   decodeCookie,
//   checkVisibility,
//   ProfileController.read
// );
// router.get("/count", ProfileController.count);

// router.get("/diplome", DiplomeController.browse);
// router.get("/profession", JobController.browse);
// router.get("/promotion", PromotionController.browse);
// router.get("/master", MasterController.browse);

// router.post("/signup", preparedDataForSignIn, validateUser, UserController.add);
// router.post("/login", validateLogin, UserController.login);

// router.put("/user/update/:id", checkAuth, checkRights, UserController.edit);
// router.put(
//   "/profile/update/:id",
//   checkAuth,
//   checkRights,
//   ProfileController.edit
// );

// router.delete(
//   "/annuaire/delete/:id",
//   checkAuth,
//   checkRights,
//   ProfileController.delete
// );
// router.delete(
//   "/user/delete/:id",
//   checkAuth,
//   checkRights,
//   UserController.delete
// );

// module.exports = router;
