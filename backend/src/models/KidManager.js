const AbstractManager = require("./AbstractManager");

class KidManager extends AbstractManager {
  static table = "kid";

  insert(kid) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, birthdate) values (?, ?, ?)`,
      [kid.lastname, kid.firstname, kid.birthdate]
    );
  }

  update(kid) {
    return this.connection.query(
      `update ${this.table} set lastname = ?, firstname = ?, birthdate = ? where id = ?`,
      [kid.lastname, kid.firstname, kid.birthdate, kid.id]
    );
  }

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${this.table} as where (lastname LIKE %?% OR firstname LIKE %?%)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(kid) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      kid.id,
    ]);
  }
}

module.exports = KidManager;
