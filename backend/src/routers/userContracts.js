const express = require("express");

const usercontractsRouter = express.Router();

const { UsercontractController } = require("../controllers");

// contractsRouter.get(
//   "/contract/:id",
//   checkAuth,
//   decodeCookie,
//   ContractController.read
// );

usercontractsRouter.post("/usercontract/add", UsercontractController.add);
// userContractsRouter.delete("/usercontract/:id", UserContractController.delete);

module.exports = usercontractsRouter;
