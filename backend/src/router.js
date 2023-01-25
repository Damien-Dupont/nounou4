const express = require("express");

// const { validateKid } = require("./middlewares/kidMiddleware");

// const auth = require("./middlewares/auth");

// const Kid = require("./models/Kid");

const itemControllers = require("./controllers/itemControllers");

const {
  //   ProfileController,
  UserController,
  KidController,
  ContractControllers,
  //   DiplomeController,
  //   JobController,
  //   PromotionController,
  //   MasterController,
} = require("./controllers");

const router = express.Router();

// router.post("/kiddo", (req, res, next) => {
//   const kid = new KidControllers({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     birthdate: req.body.birthdate,
//   });
//   kid
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "Post saved successfully!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error,
//       });
//     });
// });

// router.get("/user", UserController.browse);
// router.get("/user/:id", UserController.read);
// router.put("/user/:id", UserController.edit);
router.post("/user", UserController.add);
// router.delete("/user/:id", UserController.destroy);

router.post("/kid", KidController.add);

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
