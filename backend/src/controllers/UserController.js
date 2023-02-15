const models = require("../models");
const { jwtSign } = require("../services/jwt");
const { passwordHash, passwordVerify } = require("../services/password");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
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
    const user = req.body;

    // TODO validations (length, format...)

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
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

  static add = async (req, res) => {
    console.log("ici", req.body);
    const { lastname, firstname, roleId, email } = req.body;
    const password = await passwordHash(req.body.password);

    models.user
      .insert(lastname, firstname, roleId, email, password)
      .then((result) => {
        res.status(201).json({ ...req.body, id: result[0].insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const nope = "Email ou mot de passe incorrect";
    models.user
      .findByEmail(req.body.email)
      .then(async (rows) => {
        if (rows[0] == null) {
          res.sendStatus(401).send({ message: nope });
        }
        if (await passwordVerify(rows[0].password, req.body.password)) {
          const token = jwtSign(
            { email: rows[0].email, role: rows[0].roleId, id: rows[0].id },
            { expiresIn: "1h" }
          );
          // res.send({ token });
          delete rows[0].password;

          return res
            .cookie("access_token", token, {
              httpOnly: true,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            })
            .status(200)
            .json({ ...rows[0] });
        }
        return res.status(401).send({ message: nope });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send({ error: err.message });
      });
  };

  static delete = (req, res) => {
    models.user
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

module.exports = UserController;
