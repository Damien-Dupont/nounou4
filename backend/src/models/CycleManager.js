const AbstractManager = require("./AbstractManager");

class CycleManager extends AbstractManager {
  static table = "cycle";

  insert(
    week,
    mondayStart,
    tuesdayStart,
    wednesdayStart,
    thursdayStart,
    fridayStart,
    mondayDuration,
    tuesdayDuration,
    wednesdayDuration,
    thursdayDuration,
    fridayDuration
  ) {
    const cycleId =
      1 +
      (parseInt(
        this.connection.query(
          "select id_cycle from cycle ORDER BY desc LIMIT 1"
        ),
        10
      ) || 0);

    return this.connection.query(
      `insert into ${this.table} (id_cycle, week, monday_start, tuesday_start, wednesday_start, thursday_start, friday_start, monday_duration, tuesday_duration, wednesday_duration, thursday_duration, friday_duration) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cycleId,
        week,
        mondayStart,
        tuesdayStart,
        wednesdayStart,
        thursdayStart,
        fridayStart,
        mondayDuration,
        tuesdayDuration,
        wednesdayDuration,
        thursdayDuration,
        fridayDuration,
      ]
    );
  }

  update(
    cycleId,
    week,
    mondayStart,
    tuesdayStart,
    wednesdayStart,
    thursdayStart,
    fridayStart,
    mondayDuration,
    tuesdayDuration,
    wednesdayDuration,
    thursdayDuration,
    fridayDuration
  ) {
    return this.connection.query(
      `update ${this.table} set monday_start = ?, tuesday_start = ?, wednesday_start = ?, thursday_start = ?, friday_start = ?, monday_duration = ?, tuesday_duration = ?, wednesday_duration = ?, thursday_duration = ?, friday_duration = ?, where week = ? AND id_cycle = ?`,
      [
        mondayStart,
        tuesdayStart,
        wednesdayStart,
        thursdayStart,
        fridayStart,
        mondayDuration,
        tuesdayDuration,
        wednesdayDuration,
        thursdayDuration,
        fridayDuration,
        week,
        cycleId,
      ]
    );
  }

  getScheduleByVersion(versionId, contractId) {
    return this.connection.query(
      `select * from ${this.table} as CY
      INNER JOIN durations as D ON D.cycle_id = CY.id_cycle
      INNER JOIN version as V on V.durations_id = D.id_durations
      where V.id_version = ? AND V.contract_id = ?`,
      [versionId, contractId]
    );
  }

  getScheduleByCurrentDate(versionId, date) {
    return this.connection.query(
      `select * from ${this.table} as CY
      INNER JOIN durations as D ON D.cycle_id = CY.id_cycle
      INNER JOIN version as V on V.durations_id = D.id_durations
      where V.starting_date <= ? AND V.id_version = ?
      ORDER BY desc
      LIMIT 1`,
      [date, versionId]
    );
  }

  // findbyId(prices) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id_prices = ?`, [prices.id])
  //     .then((res) => res[0]);
  // }

  // delete(cycle) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     cycle.id,
  //   ]);
  // }
}

module.exports = CycleManager;
