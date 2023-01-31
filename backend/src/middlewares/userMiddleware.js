const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

const nope = "Vous ne disposez pas des droits nécessaires à cette opération";

const validateUser = (req, res, next) => {
  const data = { ...req.body };
  // const stringPattern = /[a-zA-Z -]+/g;

  const { error } = Joi.object({
    email: Joi.string().email().max(255).presence("required"),
    password: Joi.string().max(50).min(8).presence("required"),
    lastname: Joi.string().max(80).presence("required"),
    firstname: Joi.string().max(80).presence("required"),
    roleId: Joi.number().integer().max(3).presence("required"),
  }).validate(data, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const validateUpdate = (req, res, next) => {
  const data = { ...req.user };
  Object.keys(data).forEach((el) => {
    if (data[el] === "") delete data[el];
  });
  const { error } = Joi.object({
    lastname: Joi.string().max(80).presence("required"),
    firstname: Joi.string().max(80).presence("required"),
  }).validate(data, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().max(255).presence("required"),
    password: Joi.string().max(30).presence("required"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json("Les champs saisis sont incorrects");
  }
};

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        if (err) {
          res.status(401).send(nope);
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send(nope);
  }
};

const checkAdminRights = async (req, res, next) => {
  const user = await models.user.findByMail(req.access_token.email);

  if (user[0] && user[0].role === "admin") {
    next();
  } else {
    res.status(401).send(nope);
  }
};

const decodeCookie = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        if (err) {
          req.access_token = false;
          next();
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    req.access_token = false;
    next();
  }
};

module.exports = {
  validateUser,
  validateLogin,
  validateUpdate,
  checkAuth,
  checkAdminRights,
  decodeCookie,
};
