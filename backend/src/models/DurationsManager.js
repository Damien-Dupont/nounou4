const AbstractManager = require("./AbstractManager");

class DurationsManager extends AbstractManager {
  static table = "durations";

  insert(weeksPerYear, weeksPerCycle, cycleId) {
    // console.log("DurationsManager", weeks_per_year, weeks_per_cycle, cycle_id);
    return this.connection.query(
      `insert into ${this.table} (weeks_per_year, weeks_per_cycle, cycle_id) values (?, ?, ?)`,
      [weeksPerYear, weeksPerCycle, cycleId]
    );
  }

  update(durations, weeksPerYear, weeksPerCycle, cycleId) {
    return this.connection.query(
      `update ${this.table} set weeks_per_year = ?, weeks_per_cycle = ?, cycle_id, where id = ?`,
      [weeksPerYear, weeksPerCycle, cycleId, durations.id]
    );
  }

  // findbyId(durations) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id_durations = ?`, [
  //       durations.id,
  //     ])
  //     .then((res) => res[0]);
  // }

  // delete(durations) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     durations.id,
  //   ]);
  // }
}

module.exports = DurationsManager;
