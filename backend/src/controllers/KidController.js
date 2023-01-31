const models = require("../models");

class KidController {
  static browse = (req, res) => {
    models.kid
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByName = (req, res) => {
    const name = req.body;
    models.kid
      .findbyName(name)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByParent = (req, res) => {
    console.log("browseByParent", req.body);
    const parent = req.params.id;
    models.kid
      .findbyParent(parent)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.kid
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

  static edit = (req, res) => {
    const kid = req.body;

    // TODO validations (length, format...)

    kid.id = parseInt(req.params.id, 10);

    models.kid
      .update(kid)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const { lastname, firstname, birthdate, parentId } = req.body;

    models.kid
      .insert(lastname, firstname, birthdate, parentId)
      .then((result) => {
        res.status(201).send({ ...req.body, id: result[0].insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.kid
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

module.exports = KidController;
