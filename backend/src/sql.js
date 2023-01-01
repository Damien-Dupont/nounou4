// const AbstractManager = require("./AbstractManager");

class sqlManager {
  static table = "contract";

  getDurationOfDays(contractId) {
    return this.connection.query(
      `SELECT TIMEDIFF(monday_end, monday_start) as MONDAY,
      TIMEDIFF(tuesday_end, tuesday_start) as TUESDAY,
      TIMEDIFF(wednesday_end, wednesday_start) as WEDNESDAY,
      TIMEDIFF(thursday_end, thursday_start) as THURSDAY,
      TIMEDIFF(friday_end, friday_start) as FRIDAY
      from ${this.table}`,
      [contractId]
    );
  }

  //   getDate(id) {
  //     return this.connection.query(`select date`);
  //   }

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

module.exports = sqlManager;
