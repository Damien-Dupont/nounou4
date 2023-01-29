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
  startingDate: "2022-09-01",
  weeksPerYear: 36,
  mondayStart: "07:45:00",
  mondayEnd: "17:15:00",
  tuesdayStart: "07:45:00",
  tuesdayEnd: "17:15:00",
  wednesdayStart: null,
  wednesdayEnd: null,
  thursdayStart: "07:45:00",
  thursdayEnd: "17:15:00",
  fridayStart: "07:45:00",
  fridayEnd: "17:15:00",
  priceHour: 4,
  priceOverHour: 4.5,
  priceHousehold: 3.39,
  priceLongHousehold: 3.8,
  priceMeal: 3.5,
  priceSnack: 1.5,
};

module.exports = { contractToCreate, contractKeys };
