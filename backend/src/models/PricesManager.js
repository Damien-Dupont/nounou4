const AbstractManager = require("./AbstractManager");

class PricesManager extends AbstractManager {
  static table = "prices";

  insert(
    priceHour,
    priceHousehold,
    priceLongHousehold,
    priceMeal,
    priceSnack,
    priceOverHour
  ) {
    return this.connection.query(
      `insert into ${this.table} (price_hour, price_household, price_long_household, price_meal, price_snack, price_over_hour) values (?, ?, ?, ?, ?, ?)`,
      [
        priceHour,
        priceHousehold,
        priceLongHousehold,
        priceMeal,
        priceSnack,
        priceOverHour,
      ]
    );
  }

  update(
    prices,
    priceHour,
    priceHousehold,
    priceLongHousehold,
    priceMeal,
    priceSnack,
    priceOverHour
  ) {
    return this.connection.query(
      `update ${this.table} set price_hour = ?, price_household = ?, price_long_household = ?, price_meal = ?, price_snack = ?, price_over_hour = ?, where id = ?`,
      [
        priceHour,
        priceHousehold,
        priceLongHousehold,
        priceMeal,
        priceSnack,
        priceOverHour,
        prices.id,
      ]
    );
  }

  // findbyId(prices) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id_prices = ?`, [prices.id])
  //     .then((res) => res[0]);
  // }

  findCurrentPricing(contractId, date) {
    return this.connection
      .query(
        `SELECT * from ${this.table} as P
        INNER JOIN version as V ON V.prices_id = P.id_prices
        WHERE V.contract_id = ? AND V.starting_date <= ?
        ORDER BY V.starting_date DESC
        LIMIT 1`,
        [contractId, date]
      )
      .then((res) => res[0]);
  }

  // delete(prices) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     prices.id,
  //   ]);
  // }
}

module.exports = PricesManager;
