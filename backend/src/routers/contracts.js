const contractsRouter = require("express").Router();

const {
  validateContract,
  prepareData,
} = require("../middlewares/contractMiddleware");

const {
  checkAuth,
  // checkAdminRights,
  decodeCookie,
  // checkAdminRights,
} = require("../middlewares/userMiddleware");

const { ContractController } = require("../controllers");

contractsRouter.get(
  "/contract/:id",
  checkAuth,
  decodeCookie,
  ContractController.read
);

contractsRouter.post(
  "/contract/add",
  prepareData,
  validateContract,
  ContractController.add
);

contractsRouter.put("/contract/update/:id", checkAuth, ContractController.edit);

module.exports = contractsRouter;
