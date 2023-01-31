const express = require("express");

const userContractsRouter = express.Router();

const {
  prepareData,
  validateContract,
} = require("../middlewares/contractMiddleware");

// const {
//   checkAuth,
//   // checkAdminRights,
//   // decodeCookie,
//   // checkAdminRights,
// } = require("../middlewares/userMiddleware");

const { UserContractController } = require("../controllers");

// contractsRouter.get(
//   "/contract/:id",
//   checkAuth,
//   decodeCookie,
//   ContractController.read
// );

userContractsRouter.post(
  "/usercontract/add",
  prepareData,
  validateContract,
  UserContractController.add
);

// contractsRouter.put("/contract/update/:id", checkAuth, ContractController.edit);

module.exports = userContractsRouter;
