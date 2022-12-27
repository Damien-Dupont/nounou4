const AbstractManager = require("./AbstractManager");

class VersionManager extends AbstractManager {
  static table = "version";

  insert(contract, startingDate, durationsId, pricesId) {
    return this.connection.query(
      `insert into ${this.table} (contract_id, starting_date, durations_id, prices_id) values (?, ?, ?, ?)`,
      [contract.id, startingDate, durationsId, pricesId]
    );
  }

  update(contract, startingDate, durationsId, pricesId, regulation) {
    return this.connection.query(
      `update ${this.table} set starting_date = ?, durations_id = ?, prices_id = ?, regulation_at_end, where id = ?`,
      [startingDate, durationsId, pricesId, regulation, contract.id]
    );
  }

  findbyID(versionId, contractId) {
    return this.connection
      .query(
        `select * from ${this.table} where (id_version = ? AND contract_id = ?)`,
        [versionId, contractId]
      )
      .then((res) => res[0]);
  }

  // delete(version) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     version.id,
  //   ]);
  // }
}

module.exports = VersionManager;
