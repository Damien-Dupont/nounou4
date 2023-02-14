/* eslint-disable prefer-destructuring */
const Joi = require("joi");

const prepareData = (req, res, next) => {
  // console.log("début du middleware prepareData");
  const data = { ...req.body };
  data.priceHour = parseFloat(data.priceHour).toFixed(2);
  data.priceOverHour =
    data.priceOverHour === 0
      ? data.priceHour
      : parseFloat(data.priceOverHour).toFixed(2);
  data.priceHousehold = parseFloat(data.priceHousehold).toFixed(2);
  data.priceLongHousehold =
    data.priceLongHousehold === 0
      ? data.priceHousehold
      : parseFloat(data.priceLongHousehold).toFixed(2);
  data.priceMeal = parseFloat(data.priceMeal).toFixed(2);
  data.priceSnack = parseFloat(data.priceSnack).toFixed(2);
  data.weeksPerYear = parseInt(data.weeksPerYear, 10);
  req.body = data;
  // console.log("fin du middleware prepareData");
  next();
};

const convertDateAndTime = (req, res, next) => {
  const data = { ...req.body };
  // console.log("début du middleware convertDateAndTime");
  Object.keys(data).forEach((el) => {
    if (el.includes("day")) {
      data[el] = data[el].split("T")[1].split(".")[0];
    }
    if (el.includes("Date")) {
      data[el] = data[el].split("T")[0];
    }
  });
  req.body = data;
  // console.log("fin du middleware convertDateAndTime", req.body);
  next();
};

const validateContract = (req, res, next) => {
  const data = { ...req.body };

  const { error } = Joi.object({
    kidId: Joi.number().integer().min(1).presence("required"),
    caregiver: Joi.string().max(80).presence("required"),
    priceHour: Joi.number().sign("positive").presence("required").not(0),
    priceOverHour: Joi.number().sign("positive").presence("required").not(0),
    priceHousehold: Joi.number().sign("positive").presence("required").not(0),
    priceLongHousehold: Joi.number()
      .sign("positive")
      .presence("required")
      .not(0),
    priceMeal: Joi.number().sign("positive").presence("required").not(0),
    priceSnack: Joi.number().sign("positive").presence("required").not(0),
    startingDate: Joi.date().iso().presence("required"),
    weeksPerYear: Joi.number().sign("positive").presence("required"),
    mondayStart: [Joi.date().iso(), null],
    mondayEnd: [Joi.date().iso(), null],
    tuesdayStart: [Joi.date().iso(), null],
    tuesdayEnd: [Joi.date().iso(), null],
    wednesdayStart: [Joi.date().iso(), null],
    wednesdayEnd: [Joi.date().iso(), null],
    thursdayStart: [Joi.date().iso(), null],
    thursdayEnd: [Joi.date().iso(), null],
    fridayStart: [Joi.date().iso(), null],
    fridayEnd: [Joi.date().iso(), null],
    isMain: Joi.boolean().presence("required"),
    userId: Joi.number().integer().min(1).presence("required"),
  }).validate(data, { abortEarly: false });
  if (!error) {
    // res.status(200);
    next();
  } else {
    res.status(400).json(error);
  }
};

// const validateUpdate = (req, res, next) => {
//   const data = { ...req.user };
//   Object.keys(data).forEach((el) => {
//     if (data[el] === "") delete data[el];
//   });
//   const { error } = Joi.object({
//     lastname: Joi.string().max(80).presence("required"),
//     firstname: Joi.string().max(80).presence("required"),
//   }).validate(data, { abortEarly: false });

//   if (!error) {
//     next();
//   } else {
//     res.status(400).json(error);
//   }
// };

// const validateLogin = (req, res, next) => {
//   const { error } = Joi.object({
//     email: Joi.string().max(255).presence("required"),
//     password: Joi.string().max(30).presence("required"),
//   }).validate(req.body, { abortEarly: false });

//   if (!error) {
//     next();
//   } else {
//     res.status(400).json("Les champs saisis sont incorrects");
//   }
// };

// const checkAuth = (req, res, next) => {
//   if (req.cookies) {
//     jwt.verify(
//       req.cookies.access_token,
//       process.env.JWT_AUTH_SECRET,
//       (err, decode) => {
//         if (err) {
//           res.status(401).send(nope);
//         } else {
//           req.access_token = decode;
//           next();
//         }
//       }
//     );
//   } else {
//     res.status(401).send(nope);
//   }
// };

// const checkAdminRights = async (req, res, next) => {
//   const user = await models.user.findByMail(req.access_token.email);

//   if (user[0] && user[0].role === "admin") {
//     next();
//   } else {
//     res.status(401).send(nope);
//   }
// };

// const decodeCookie = (req, res, next) => {
//   if (req.cookies) {
//     jwt.verify(
//       req.cookies.access_token,
//       process.env.JWT_AUTH_SECRET,
//       (err, decode) => {
//         if (err) {
//           req.access_token = false;
//           next();
//         } else {
//           req.access_token = decode;
//           next();
//         }
//       }
//     );
//   } else {
//     req.access_token = false;
//     next();
//   }
// };

module.exports = {
  validateContract,
  prepareData,
  convertDateAndTime,
  //   validateLogin,
  //   validateContractUpdate,
  //   checkAuth,
  //   checkAdminRights,
  //   decodeCookie,
};
