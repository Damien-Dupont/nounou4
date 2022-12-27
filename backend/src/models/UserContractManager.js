const AbstractManager = require("./AbstractManager");

class UserContractManager extends AbstractManager {
  static table = "user_contract";

  insert(contract, user, kid, isMain) {
    // console.log(
    //   "UserContractManager - INSERT",
    //   contract.id,
    //   user.id,
    //   user.role,
    //   kid.id,
    //   is_main
    // );
    return this.connection.query(
      `insert into ${this.table} (contract_id, user_id, kid_id, is_main) values (?, ?, ?, ?)`,
      [contract.id, user.id, kid.id, isMain]
    );
  }

  create(contract, parent, nanny, kid, isMain) {
    // console.log(
    //   "UserContractManager - CREATE",
    //   contract.id,
    //   parent.id,
    //   nanny.id,
    //   kid.id,
    //   is_main
    // );
    this.insert(contract, parent, kid, isMain);
    this.insert(contract, nanny, kid, isMain);
  }

  update(contract, user, kid, isMain) {
    return this.connection.query(
      `update ${this.table} set is_main = ?, user_id = ?, kid_id = ? where contract_id = ?`,
      [isMain, user.id, kid.id, contract.id]
    );
  }

  findByKid(kid) {
    return this.connection
      .query(
        `select * from ${this.table} as UC INNER JOIN kid as K ON kid_id = id_kid where INNER JOIN user as U ON user_id = id_user where id_kid = ?`,
        [kid.id]
      )
      .then((res) => res[0]);
  }

  findByUser(user) {
    return this.connection
      .query(
        `select * from ${this.table} as UC INNER JOIN kid as K ON kid_id = id_kid where INNER JOIN user as U ON user_id = id_user where user_id = ?`,
        [user.id]
      )
      .then((res) => res[0]);
  }

  // delete(contract) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     contract.id,
  //   ]);
  // }
}

module.exports = UserContractManager;
