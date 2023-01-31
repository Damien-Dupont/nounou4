// eslint-disable-next-line import/no-import-module-exports
// import moment from "moment";

const Joi = require("joi");

// const convertTime = (date) => {
//   return `${date.getHours()}:${date.getMinutes()}`;
// };

// const convertDate = (date) => {
//   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// };

const prepareData = (req, res, next) => {
  console.log("prepareData");
  const data = { ...req.body.contract };
  //   Object.keys(data).forEach((el) => {
  //     if (data[el] === "" || data[el] === null) delete data[el];
  //   });
  //   data.startingDate = data.startingDate;
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
  //
  //   if (data.mondayStart !== undefined) {
  //     data.mondayStart = convertTime(data.mondayStart);
  //     data.mondayEnd = convertTime(data.mondayEnd);
  //   }
  //   if (data.tuesdayStart !== undefined) {
  //     data.tuesdayStart = convertTime(data.tuesdayStart);
  //     data.tuesdayEnd = convertTime(data.tuesdayEnd);
  //   }
  //   if (data.wednesdayStart !== undefined) {
  //     data.wednesdayStart = convertTime(data.wednesdayStart);
  //     data.wednesdayEnd = convertTime(data.wednesdayEnd);
  //   }
  //   if (data.thursdayStart !== undefined) {
  //     data.thursdayStart = convertTime(data.thursdayStart);
  //     data.thursdayEnd = convertTime(data.thursdayEnd);
  //   }
  //   if (data.fridayStart !== undefined) {
  //     data.fridayStart = convertTime(data.fridayStart);
  //     data.fridayEnd = convertTime(data.fridayEnd);
  //   }
  //
  req.body.contract = data;
  next();
};

const validateContract = (req, res, next) => {
  const data = { ...req.body.contract };
  console.log("validateContract", data);
  Object.keys(data).forEach((el) => {
    if (data[el] === "" || data[el] === null) delete data[el];
  });
  const { error } = Joi.object({
    kidId: Joi.number().presence("required"),
    caregiver: Joi.string().max(80).presence("required"),
    priceHour: Joi.number().presence("required"),
    priceOverHour: Joi.number().presence("required"),
    priceHousehold: Joi.number().presence("required"),
    priceLongHousehold: Joi.number().presence("required"),
    priceMeal: Joi.number().presence("required"),
    priceSnack: Joi.number().presence("required"),
    startingDate: Joi.date().presence("required"),
    weeksPerYear: Joi.number().presence("required"),
    mondayStart: Joi.date(),
    mondayEnd: Joi.date(),
    tuesdayStart: Joi.date(),
    tuesdayEnd: Joi.date(),
    wednesdayStart: Joi.date(),
    wednesdayEnd: Joi.date(),
    thursdayStart: Joi.date(),
    thursdayEnd: Joi.date(),
    fridayStart: Joi.date(),
    fridayEnd: Joi.date(),
  }).validate(data, { abortEarly: false });

  if (!error) {
    console.log("validation ok");
    next();
  } else {
    console.log("validation no", error);
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
  //   validateLogin,
  //   validateContractUpdate,
  //   checkAuth,
  //   checkAdminRights,
  //   decodeCookie,
};
