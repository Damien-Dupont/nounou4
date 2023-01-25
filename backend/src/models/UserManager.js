const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(lastname, firstname, roleid) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, role_id) values (?, ?, ?)`,
      [lastname, firstname, roleid]
    );
  }

  update(lastname, firstname, id) {
    return this.connection.query(
      `update ${this.table} set lastname = ?, firstname = ?, where id = ?`,
      [lastname, firstname, id]
    );
  }

  findByName(name) {
    return this.connection
      .query(
        `select * from ${this.table} where (lastname = ? OR firstname = ?)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  // delete(id) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     id,
  //   ]);
  // }
}

module.exports = UserManager;
