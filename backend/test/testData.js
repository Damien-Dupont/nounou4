// user
const userKeys = ["id", "lastname", "firstname", "roleId", "email", "password"];
const userToCreate = {
  lastname: "Durand",
  firstname: "Jean",
  roleId: 2,
  email: "j.dupont@email.com",
  password: "password",
};

// kid
const kidKeys = ["id", "lastname", "firstname", "birthdate", "parent"];
const kidToCreate = {
  firstname: "kid",
  lastname: "enfant",
  birthdate: "1970-01-01",
  parent: 1,
};

// contract
const contractKeys = [
  "id",
  "startingDate",
  "kidId",
  "caregiver",
  "weeksPerYear",
  "mondayStart",
  "mondayEnd",
  "tuesdayStart",
  "tuesdayEnd",
  "wednesdayStart",
  "wednesdayEnd",
  "thursdayStart",
  "thursdayEnd",
  "fridayStart",
  "fridayEnd",
  "priceHour",
  "priceOverHour",
  "priceHousehold",
  "priceLongHousehold",
  "priceMeal",
  "priceSnack",
];
const contractToCreate = {
  kidId: 1,
  caregiver: "Nounou Isa",
  startingDate: "2022-09-01T00:00:00.000Z",
  weeksPerYear: 36,
  mondayStart: "2022-09-01T07:45:00.000Z",
  mondayEnd: "2022-09-01T17:15:00.000Z",
  tuesdayStart: "2022-09-01T07:45:00.000Z",
  tuesdayEnd: "2022-09-01T17:15:00.000Z",
  wednesdayStart: null,
  wednesdayEnd: null,
  thursdayStart: "2022-09-01T07:45:00.000Z",
  thursdayEnd: "2022-09-01T17:15:00.000Z",
  fridayStart: "2022-09-01T07:45:00.000Z",
  fridayEnd: "2022-09-01T17:15:00.000Z",
  priceHour: 4,
  priceOverHour: 4.5,
  priceHousehold: 3.39,
  priceLongHousehold: 3.8,
  priceMeal: 3.5,
  priceSnack: 1.5,
};

// user contract
const userContractKeys = ["isMain", "user", "contract"];
const userContractToCreate = {
  isMain: 1,
  user: 214,
  contract: 14,
};

module.exports = {
  userContractKeys,
  userContractToCreate,
  contractToCreate,
  contractKeys,
  userToCreate,
  userKeys,
  kidToCreate,
  kidKeys,
};
