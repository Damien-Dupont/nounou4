const fs = require("fs");
const mysql = require("mysql2/promise");
const path = require("path");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// const controllers = fs
//   .readdirSync(__dirname)
//   .filter((file) => file !== "ItemManager.js" && file !== "index.js")
//   .reduce((controllerList, file) => {
//     const key = file.slice(0, -".js".length);

//     // eslint-disable-next-line global-require, import/no-dynamic-require
//     const Controller = require(path.join(__dirname, file));

//     return { ...controllerList, [key]: Controller };
//   }, {});

const models = fs
  .readdirSync(__dirname)
  // .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
  .filter((file) => file !== "index.js")
  .reduce((acc, file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Manager = require(path.join(__dirname, file));

    // eslint-disable-next-line no-param-reassign
    acc[Manager.table] = new Manager(pool, Manager.table);

    return acc;
  }, {});

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    throw new ReferenceError(
      `controllers.${prop} is not defined. Did you create ${prop}.js?`
    );
  },
};

module.exports = new Proxy(models, handler);

// const fs = require("fs");
// const mysql = require("mysql2/promise");
// const path = require("path");

// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const pool = mysql.createPool({
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
// });

// pool.getConnection().catch(() => {
//   console.warn(
//     "Warning:",
//     "Failed to get a DB connection.",
//     "Did you create a .env file with valid credentials?",
//     "Routes using models won't work as intended"
//   );
// });

// const models = fs
//   .readdirSync(__dirname)
//   .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
//   .reduce((acc, file) => {
//     // eslint-disable-next-line global-require, import/no-dynamic-require
//     const Manager = require(path.join(__dirname, file));

//     const managerInstance = new Manager();
//     managerInstance.setConnection(pool);

//     return { ...acc, [managerInstance.table]: managerInstance };
//   }, {});

// const handler = {
//   get(obj, prop) {
//     if (prop in obj) {
//       return obj[prop];
//     }

//     const pascalize = (string) =>
//       string.slice(0, 1).toUpperCase() + string.slice(1);

//     throw new ReferenceError(
//       `models.${prop} is not defined. Did you create ${pascalize(
//         prop
//       )}Manager.js?`
//     );
//   },
// };

// module.exports = new Proxy(models, handler);
