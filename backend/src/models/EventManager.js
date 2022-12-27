const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  static table = "event";

  insert(contractId, eventTypeId, startingDate, endingDate) {
    const creationDate = new Date().toLocaleDateString();
    // console.log(
    //   "EventManager",
    //   contract_id,
    //   event_type_id,
    //   starting_date,
    //   ending_date,
    //   creation_date
    // );
    return this.connection.query(
      `insert into ${this.table} (contract_id, event_type_id, starting_date, ending_date, creation_date) values (?, ?, ?, ?, ?)`,
      [contractId, eventTypeId, startingDate, endingDate, creationDate]
    );
  }

  update(contractId, eventTypeId, startingDate, endingDate) {
    const creationDate = new Date().toLocaleDateString();
    return this.connection.query(
      `update ${this.table} set ending_date = ?, starting_date = ?, event_type_id = ?, creation_date =?, where id = ?`,
      [endingDate, startingDate, eventTypeId, creationDate, contractId]
    );
  }

  // findbyContract(contract_id) {
  //   return this.connection
  //     .query(`select * from ${this.table} as where contract_id = ?`, [
  //       contract_id,
  //     ])
  //     .then((res) => res[0]);
  // }

  findbyEventType(eventTypeId, contractId) {
    return this.connection
      .query(
        `select * from ${this.table} as where event_type_id = ? AND contract_id =?`,
        [eventTypeId, contractId]
      )
      .then((res) => res[0]);
  }

  findbyContractBetween(contractId, dateOpen, dateClose) {
    return this.connection
      .query(
        `select * from ${this.table} as where contract_id = ? AND (starting_date >= ? OR ending_date >=?) AND (starting_date <= ? OR ending_date <= ?)`,
        [contractId, dateOpen, dateClose, dateOpen, dateClose]
      )
      .then((res) => res[0]);
  }

  // delete(event_id) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     event_id,
  //   ]);
  // }
}

module.exports = EventManager;
