const models = require("../models");
// const { jwtSign } = require("../services/jwt");

class ContractController {
  // static browse = (req, res) => {
  //   models.contract
  //     .findAll()
  //     .then(([rows]) => {
  //       res.send(rows);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // static read = (req, res) => {
  //   models.contract
  //     .find(req.params.id)
  //     .then(([rows]) => {
  //       if (rows[0] == null) {
  //         res.sendStatus(404);
  //       } else {
  //         res.send(rows[0]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // static edit = (req, res) => {
  //   const contract = req.body;

  //   // TODO validations (length, format...)

  //   contract.id = parseInt(req.params.id, 10);

  //   models.contract
  //     .update(contract)
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

  static add = async (req, res) => {
    const {
      kidId,
      caregiver,
      startingDate,
      weeksPerYear,
      mondayStart,
      mondayEnd,
      tuesdayStart,
      tuesdayEnd,
      wednesdayStart,
      wednesdayEnd,
      thursdayStart,
      thursdayEnd,
      fridayStart,
      fridayEnd,
      priceHour,
      priceOverHour,
      priceHousehold,
      priceLongHousehold,
      priceMeal,
      priceSnack,
    } = req.body;
    // const { isMain, userId } = req.body;
    console.log("add/input", req.body);
    await models.contract
      .insert(
        kidId,
        caregiver,
        startingDate,
        weeksPerYear,
        mondayStart,
        mondayEnd,
        tuesdayStart,
        tuesdayEnd,
        wednesdayStart,
        wednesdayEnd,
        thursdayStart,
        thursdayEnd,
        fridayStart,
        fridayEnd,
        priceHour,
        priceOverHour,
        priceHousehold,
        priceLongHousehold,
        priceMeal,
        priceSnack
      )
      .then((result) => {
        res.status(201).json({ ...req.body, id: result[0].insertId });
        console.log("output", req.body);
        debugger;
        // return result[0].insertId;
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    return { req };
    // const userContract = await models.userContract.insert(isMain, userId, contract.id)
    // .then((result) => {
    //   res.status(201).json({ ...req.body, id: result[0].insertId });
    //   // return result[0].insertId;
    // });
  };
  // const createContract = async () => {
  //   const {
  //     startingDate,
  //     kidId,
  //     caregiver,
  //     weeksPerYear,
  //     mondayStart,
  //     mondayEnd,
  //     tuesdayStart,
  //     tuesdayEnd,
  //     wednesdayStart,
  //     wednesdayEnd,
  //     thursdayStart,
  //     thursdayEnd,
  //     fridayStart,
  //     fridayEnd,
  //     priceHour,
  //     priceOverHour,
  //     priceHousehold,
  //     priceLongHousehold,
  //     priceMeal,
  //     priceSnack,
  //   } = req.body;
  //   const { isMain, userId } = req.body;

  //   const contractId = await models.contract
  //     .insert(
  //       startingDate,
  //       kidId,
  //       caregiver,
  //       weeksPerYear,
  //       mondayStart,
  //       mondayEnd,
  //       tuesdayStart,
  //       tuesdayEnd,
  //       wednesdayStart,
  //       wednesdayEnd,
  //       thursdayStart,
  //       thursdayEnd,
  //       fridayStart,
  //       fridayEnd,
  //       priceHour,
  //       priceOverHour,
  //       priceHousehold,
  //       priceLongHousehold,
  //       priceMeal,
  //       priceSnack
  //     )
  //     .then((result) => {
  //       res.status(201).json({ ...req.body, id: result[0].insertId });
  //       return result[0].insertId;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });

  //   await models.userContract.insert(isMain, userId, contractId);
  // };

  // static delete = (req, res) => {
  //   models.contract
  //     .delete(req.params.id)
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
}

module.exports = ContractController;
