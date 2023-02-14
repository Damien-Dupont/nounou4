const express = require("express");

const contractsRouter = express.Router();
const {
  prepareData,
  validateContract,
  convertDateAndTime,
} = require("../middlewares/contractMiddleware");

const { ContractController } = require("../controllers");

contractsRouter.post(
  "/contract/add",
  prepareData,
  validateContract,
  convertDateAndTime,
  ContractController.add
);

contractsRouter.post("/contract/bind", ContractController.bind);
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
