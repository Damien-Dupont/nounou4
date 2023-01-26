const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  static table = "contract";

  insert(contract) {
    return this.connection.query(
      `insert into ${this.table} (starting_date, kid_id, caregiver, weeks_per_year, monday_start, monday_end, tuesday_start, tuesday_end, wednesday_start, wednesday_end, thursday_start, thursday_end, friday_start, friday_end, price_hour, price_over_hour, price_household, price_long_household, price_meal, price_snack, days_off, regulation_at_end)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        contract.startingDate,
        contract.kidId,
        contract.caregiver,
        contract.weeksPerYear,
        contract.mondayStart, // contract.day[0].start
        contract.mondayEnd, // contract.day[1].end
        contract.tuesdayStart,
        contract.tuesdayEnd,
        contract.wednesdayStart,
        contract.wednesdayEnd,
        contract.thursdayStart,
        contract.thursdayEnd,
        contract.fridayStart,
        contract.fridayEnd,
        contract.priceHour, // contract.price.hour
        contract.priceOverHour, // contract.price.over
        contract.priceHousehold, // contract.price.household
        contract.priceLongHousehold, // contract.price.longHousehold
        contract.priceMeal, // contract.price.meal
        contract.priceSnack, // contract.price.snack
        contract.daysOff,
        contract.regulationAtEnd,
      ]
    );
  }

  updateAny(contract, column, value) {
    return this.connection.query(
      `update ${this.table} set ${column} = ? where id_contract = ?`,
      [value, contract.id]
    );
  }

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
