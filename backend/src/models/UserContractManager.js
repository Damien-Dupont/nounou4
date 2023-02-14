const AbstractManager = require("./AbstractManager");

class UsercontractManager extends AbstractManager {
  static table = "user_contract";

  insert(isMain, userId, contractId) {
    return this.connection.query(
      `INSERT INTO ${this.table} (is_main, user_id, contract_id) values (?, ?, ?)`,
      [isMain, userId, contractId]
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

module.exports = UsercontractManager;
