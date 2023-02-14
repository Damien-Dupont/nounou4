const models = require("../models");

class UsercontractController {
  // static browse = (req, res) => {
  //   models.user
  //     .findAll()
  //     .then(([rows]) => {
  //       res.send(rows);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  static browseByParent = (req, res) => {
    const parentId = req.params.id;
    models.usercontract
      .findbyParent(parentId)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.usercontract
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static edit = (req, res) => {
  //   const user = req.body;

  //   // TODO validations (length, format...)

  //   user.id = parseInt(req.params.id, 10);

  //   models.user
  //     .update(user)
  //     .then(([result]) => {
  //       if (result.affectedRows === 0) {
  //         res.sendStatus(404);
  //       } else {
  //         res.sendStatus(204);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // static add = async (req, res) => {
  //   const { isMain, userId, contractId } = req.body;

  //   await models.usercontract
  //     .insert(isMain, userId, contractId)
  //     .then(() => {
  //       // is result an array of objects ?
  //       res.status(201);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  static delete = (req, res) => {
    models.usercontract
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UsercontractController;
