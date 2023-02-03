// eslint-disable-next-line import/no-import-module-exports
const Joi = require("joi");
// const { stringPattern, timePattern } = require("./regexPatterns");

const prepareData = (req, res, next) => {
  console.log("début du middleware prepareData");
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
  console.log("fin du middleware prepareData");
  next();
};

const validateContract = (req, res, next) => {
  console.log("début du middleware validateContract", req.body);
  const data = { ...req.body };
  Object.keys(data).forEach((el) => {
    if (data[el] === "" || data[el] === null) delete data[el];
  });
  const { error } = Joi.object({
    kidId: Joi.number().integer().min(1).presence("required"),
    // caregiver: Joi.string().max(80).presence("required"),
    // priceHour: Joi.number().sign("positive").presence("required").not(0),
    // priceOverHour: Joi.number().sign("positive").presence("required").not(0),
    // priceHousehold: Joi.number().sign("positive").presence("required").not(0),
    // priceLongHousehold: Joi.number()
    //   .sign("positive")
    //   .presence("required")
    //   .not(0),
    // priceMeal: Joi.number().sign("positive").presence("required").not(0),
    // priceSnack: Joi.number().sign("positive").presence("required").not(0),
    // startingDate: Joi.date().iso().presence("required"),
    // weeksPerYear: Joi.number().sign("positive").presence("required"),
    // mondayStart: [Joi.string().iso(), null],
    // mondayEnd: [Joi.string().iso(), null],
    // tuesdayStart: [Joi.string().iso(), null],
    // tuesdayEnd: [Joi.string().iso(), null],
    // wednesdayStart: [Joi.string().iso(), null],
    // wednesdayEnd: [Joi.string().iso(), null],
    // thursdayStart: [Joi.string().iso(), null],
    // thursdayEnd: [Joi.string().iso(), null],
    // fridayStart: [Joi.string().iso(), null],
    // fridayEnd: [Joi.string().iso(), null],
  }).validate(data, { abortEarly: false });
  console.log("fin du middleware validateContract");
  if (!error) {
    console.log("validateContract ok");
    next();
  } else {
    console.log("validateContract error");
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
