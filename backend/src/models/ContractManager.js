const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  static table = "contract";

  insert(
    startingDate,
    kidId,
    caregiver,
    weeksPerYear,
    mondayStart,
    mondayEnd,
    tuesdayStart,
    tuesdayEnd,
    wednesdayStart,
    wednesdayEnd,
    thursdayStart,
    thursdayEnd,
    fridayStart,
    fridayEnd,
    priceHour,
    priceOverHour,
    priceHousehold,
    priceLongHousehold,
    priceMeal,
    priceSnack
  ) {
    return this.connection.query(
      `insert into ${this.table} (starting_date, kid_id, caregiver, weeks_per_year, monday_start, monday_end, tuesday_start, tuesday_end, wednesday_start, wednesday_end, thursday_start, thursday_end, friday_start, friday_end, price_hour, price_over_hour, price_household, price_long_household, price_meal, price_snack)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        startingDate,
        kidId,
        caregiver,
        weeksPerYear,
        mondayStart,
        mondayEnd,
        tuesdayStart,
        tuesdayEnd,
        wednesdayStart,
        wednesdayEnd,
        thursdayStart,
        thursdayEnd,
        fridayStart,
        fridayEnd,
        priceHour,
        priceOverHour,
        priceHousehold,
        priceLongHousehold,
        priceMeal,
        priceSnack,
      ]
    );
  }

  // updateAny(contract, column, value) {
  //   return this.connection.query(
  //     `update ${this.table} set ${column} = ? where id_contract = ?`,
  //     [value, contract.id]
  //   );
  // }

  // updateStart(contract, startingDate) {
  //   return this.connection.query(
  //     `update ${this.table} set starting_date = ? where id_contract = ?`,
  //     [startingDate, contract.id]
  //   );
  // }

  // updateEnd(contract, endingDate) {
  //   return this.connection.query(
  //     `update ${this.table} set ending_date = ? where id_contract = ?`,
  //     [endingDate, contract.id]
  //   );
  // }

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
