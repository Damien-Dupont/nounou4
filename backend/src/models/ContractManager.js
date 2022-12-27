const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  static table = "contract";

  insert(startingDate) {
    // console.log("ContractManager", starting_date);
    return this.connection.query(
      `insert into ${this.table} (starting_date) values (?)`,
      [startingDate]
    );
  }

  findContractInformation(contractId) {
    return this.connection.query(
      `select * from ${this.table} as C
      INNER JOIN version as V ON C.id_contract = V.contract.id
      INNER JOIN user_contract as UC ON C.id_contract = UC.contract_id
      INNER JOIN user as U ON UC.user_id = U.id_user
      INNER JOIN kid as K ON UC.kid_id = K.id_kid
      INNER JOIN prices as P ON P.id_prices = V.prices_id
      INNER JOIN durations as D ON D.id_durations = V.durations_id
      INNER JOIN cycle as CY ON CY.id_cycle = D.cycle_id`,
      [contractId]
    );
  }

  updateStart(contract, startingDate) {
    return this.connection.query(
      `update ${this.table} set starting_date = ? where id_contract = ?`,
      [startingDate, contract.id]
    );
  }

  updateEnd(contract, endingDate) {
    return this.connection.query(
      `update ${this.table} set ending_date = ? where id_contract = ?`,
      [endingDate, contract.id]
    );
  }

  // findbyId(contract) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id = ?`, [contract.id])
  //     .then((res) => res[0]);
  // }

  // delete(contract) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     contract.id,
  //   ]);
  // }
}

module.exports = ContractManager;
