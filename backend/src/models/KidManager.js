const AbstractManager = require("./AbstractManager");

class KidManager extends AbstractManager {
  static table = "kid";

  insert(lastname, firstname, birthdate, parentId) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, birthdate, parent) values (?, ?, ?, ?)`,
      [lastname, firstname, birthdate, parentId]
    );
  }

  update(lastname, firstname, birthdate, id) {
    return this.connection.query(
      `update ${this.table} set lastname = ?, firstname = ?, birthdate = ? where id = ?`,
      [lastname, firstname, birthdate, id]
    );
  }

  findbyParent(parentId) {
    return this.connection.query(
      `select * from ${this.table} where parent = ? ORDER BY birthdate ASC`,
      [parentId]
    );
    // .then((res) => res[0]);
  }

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${this.table} where (lastname LIKE %?% OR firstname LIKE %?%)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = KidManager;
