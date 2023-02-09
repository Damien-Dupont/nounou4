const AbstractManager = require("./AbstractManager");

class UserContractManager extends AbstractManager {
  static table = "user_contract";

  insert(isMain, user, contract) {
    console.log("MANAGER insert");
    console.loginsert(isMain, user, contract);
    return this.connection.query(
      `insert into ${this.table} (is_main, user_id, contract_id) values (?, ?, ?)`,
      [isMain, user, contract]
    );
  }

  findbyId(contractId) {
    return this.connection.query(
      `select * from ${this.table} where contract_id = ?`,
      [contractId]
    );
    // .then((res) => res[0]);
  }

  findbyUser(userId) {
    return this.connection.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );
    // .then((res) => res[0]);
  }

  delete(contract) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      contract,
    ]);
  }
}

module.exports = UserContractManager;
