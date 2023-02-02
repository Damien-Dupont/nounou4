const express = require("express");

const contractsRouter = express.Router();
const { ContractController } = require("../controllers");
const {
  prepareData,
  validateContract,
} = require("../middlewares/contractMiddleware");

contractsRouter.post(
  "/contract/add",
  prepareData,
  validateContract,
  ContractController.add
);
module.exports = contractsRouter;

// const {
//   checkAuth,
//   // checkAdminRights,
//   // decodeCookie,
//   // checkAdminRights,
// } = require("../middlewares/userMiddleware");
// contractsRouter.get(
//   "/contract/:id",
//   checkAuth,
//   decodeCookie,
//   ContractController.read
// );

// contractsRouter.put("/contract/update/:id", checkAuth, ContractController.edit);
