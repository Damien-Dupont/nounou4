import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import parentReducer from "./parentSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    parent: parentReducer,
  },
});

export default store;
// // Définir les actions
// const UPDATE_CAREGIVER = "UPDATE_CAREGIVER";
// const UPDATE_WEEKS_PER_YEAR = "UPDATE_WEEKS_PER_YEAR";
// const UPDATE_STARTING_DATE = "UPDATE_STARTING_DATE";
// const UPDATE_MONDAY_START = "UPDATE_MONDAY_START";
// const UPDATE_MONDAY_END = "UPDATE_MONDAY_END";
// const UPDATE_TUESDAY_START = "UPDATE_TUESDAY_START";
// const UPDATE_TUESDAY_END = "UPDATE_TUESDAY_END";
// const UPDATE_WEDNESDAY_START = "UPDATE_WEDNESDAY_START";
// const UPDATE_WEDNESDAY_END = "UPDATE_WEDNESDAY_END";
// const UPDATE_THURSDAY_START = "UPDATE_THURSDAY_START";
// const UPDATE_THURSDAY_END = "UPDATE_THURSDAY_END";
// const UPDATE_FRIDAY_START = "UPDATE_FRIDAY_START";
// const UPDATE_FRIDAY_END = "UPDATE_FRIDAY_END";
// const UPDATE_PRICE_HOUR = "UPDATE_PRICE_HOUR";
// const UPDATE_PRICE_OVER_HOUR = "UPDATE_PRICE_OVER_HOUR";
// const UPDATE_PRICE_HOUSEHOLD = "UPDATE_PRICE_HOUSEHOLD";
// const UPDATE_PRICE_LONG_HOUSEHOLD = "UPDATE_PRICE_LONG_HOUSEHOLD";
// const UPDATE_PRICE_MEAL = "UPDATE_PRICE_MEAL";
// const UPDATE_PRICE_SNACK = "UPDATE_PRICE_SNACK";
// const UPDATE_MONDAY_CARE = "UPDATE_MONDAY_CARE";
// const UPDATE_TUESDAY_CARE = "UPDATE_TUESDAY_CARE";
// const UPDATE_WEDNESDAY_CARE = "UPDATE_WEDNESDAY_CARE";
// const UPDATE_THURSDAY_CARE = "UPDATE_THURSDAY_CARE";
// const UPDATE_FRIDAY_CARE = "UPDATE_FRIDAY_CARE";

// // Définir les créateurs d'actions
// const updateCaregiver = (value) => ({
//   type: UPDATE_CAREGIVER,
//   payload: value,
// });

// const updateWeeksPerYear = (value) => ({
//   type: UPDATE_WEEKS_PER_YEAR,
//   payload: value,
// });

// const updateStartingDate = (value) => ({
//   type: UPDATE_STARTING_DATE,
//   payload: value,
// });

// const updateMondayStart = (value) => ({
//   type: UPDATE_MONDAY_START,
//   payload: value,
// });

// const updateMondayEnd = (value) => ({
//   type: UPDATE_MONDAY_END,
//   payload: value,
// });

// const updateTuesdayStart = (value) => ({
//   type: UPDATE_TUESDAY_START,
//   payload: value,
// });

// const updateTuesdayEnd = (value) => ({
//   type: UPDATE_TUESDAY_END,
//   payload: value,
// });

// const updateWednesdayStart = (value) => ({
//   type: UPDATE_WEDNESDAY_START,
//   payload: value,
// });

// const updateWednesdayEnd = (value) => ({
//   type: UPDATE_WEDNESDAY_END,
//   payload: value,
// });

// const updateThursdayStart = (value) => ({
//   type: UPDATE_THURSDAY_START,
//   payload: value,
// });

// const updateThursdayEnd = (value) => ({
//   type: UPDATE_THURSDAY_END,
//   payload: value,
// });

// const updateFridayStart = (value) => ({
//   type: UPDATE_FRIDAY_START,
//   payload: value,
// });

// const updateFridayEnd = (value) => ({
//   type: UPDATE_FRIDAY_END,
//   payload: value,
// });

// const updatePriceHour = (value) => ({
//   type: UPDATE_PRICE_HOUR,
//   payload: value,
// });

// const updatePriceOverHour = (value) => ({
//   type: UPDATE_PRICE_OVER
