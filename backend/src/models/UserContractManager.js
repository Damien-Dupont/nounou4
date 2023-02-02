const AbstractManager = require("./AbstractManager");

class UserContractManager extends AbstractManager {
  static table = "user_contract";

  insertinsert(isMain, user, contract) {
    console.log("MANAGER insert");
    console.loginsert(isMain, user, contract);
    return this.connection.query(
      `insert into ${this.table} (is_main, user_id, contract_id) values (?, ?, ?)`,
      [isMain, user, contract]
    );
  }

  delete(contract) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      contract,
    ]);
  }
}

module.exports = UserContractManager;
