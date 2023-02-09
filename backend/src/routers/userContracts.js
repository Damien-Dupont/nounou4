const express = require("express");

const userContractsRouter = express.Router();

const { UserContractController } = require("../controllers");

// contractsRouter.get(
//   "/contract/:id",
//   checkAuth,
//   decodeCookie,
//   ContractController.read
// );

userContractsRouter.post("/usercontract/add", UserContractController.add);
// userContractsRouter.delete("/usercontract/:id", UserContractController.delete);

module.exports = userContractsRouter;
