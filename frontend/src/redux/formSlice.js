/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contractId: 1,
  kidId: null,
  caregiver: "Nounou",
  weeksPerYear: 0,
  startingDate: Date.now(),
  mondayStart: undefined,
  mondayEnd: undefined,
  tuesdayStart: undefined,
  tuesdayEnd: undefined,
  wednesdayStart: undefined,
  wednesdayEnd: undefined,
  thursdayStart: undefined,
  thursdayEnd: undefined,
  fridayStart: undefined,
  fridayEnd: undefined,
  priceHour: 0,
  priceOverHour: 0,
  priceHousehold: 0,
  priceLongHousehold: 0,
  priceMeal: 0,
  priceSnack: 0,
  mondayCare: false,
  tuesdayCare: false,
  wednesdayCare: false,
  thursdayCare: false,
  fridayCare: false,
  page: 0,
  isMain: true,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCaregiver: (state, action) => {
      state.caregiver = action.payload;
      return state;
    },
    setWeeksPerYear: (state, action) => {
      state.weeksPerYear = action.payload;
      return state;
    },
    setStartingDate: (state, action) => {
      state.startingDate = action.payload;
      return state;
    },
    setMondayStart: (state, action) => {
      state.mondayStart = action.payload;
      return state;
    },
    setMondayEnd: (state, action) => {
      state.mondayEnd = action.payload;
      return state;
    },
    setTuesdayStart: (state, action) => {
      state.tuesdayStart = action.payload;
      return state;
    },
    setTuesdayEnd: (state, action) => {
      state.tuesdayEnd = action.payload;
      return state;
    },
    setWednesdayStart: (state, action) => {
      state.wednesdayStart = action.payload;
      return state;
    },
    setWednesdayEnd: (state, action) => {
      state.wednesdayEnd = action.payload;
      return state;
    },
    setThursdayStart: (state, action) => {
      state.thursdayStart = action.payload;
      return state;
    },
    setThursdayEnd: (state, action) => {
      state.thursdayEnd = action.payload;
      return state;
    },
    setFridayStart: (state, action) => {
      state.fridayStart = action.payload;
      return state;
    },
    setFridayEnd: (state, action) => {
      state.fridayEnd = action.payload;
      return state;
    },
    setPriceHour: (state, action) => {
      state.priceHour = action.payload;
      return state;
    },
    setPriceOverHour: (state, action) => {
      state.priceOverHour = action.payload;
      return state;
    },
    setPriceHousehold: (state, action) => {
      state.priceHousehold = action.payload;
      return state;
    },
    setPriceLongHousehold: (state, action) => {
      state.priceLongHousehold = action.payload;
      return state;
    },
    setPriceMeal: (state, action) => {
      state.priceMeal = action.payload;
      return state;
    },
    setPriceSnack: (state, action) => {
      state.priceSnack = action.payload;
      return state;
    },
    setMondayCare: (state, action) => {
      state.mondayCare = action.payload;
      return state;
    },
    setTuesdayCare: (state, action) => {
      state.tuesdayCare = action.payload;
      return state;
    },
    setWednesdayCare: (state, action) => {
      state.wednesdayCare = action.payload;
      return state;
    },
    setThursdayCare: (state, action) => {
      state.thursdayCare = action.payload;
      return state;
    },
    setFridayCare: (state, action) => {
      state.fridayCare = action.payload;
      return state;
    },
    setPage: (state, action) => {
      state.page += action.payload;
    },
    setIsMain: (state) => {
      state.isMain = !state.isMain;
    },
    setKidId: (state, action) => {
      state.kidId = action.payload;
      return state;
    },
  },
});

export const {
  setCaregiver,
  setStartingDate,
  setWeeksPerYear,
  setMondayStart,
  setMondayEnd,
  setTuesdayStart,
  setTuesdayEnd,
  setWednesdayStart,
  setWednesdayEnd,
  setThursdayStart,
  setThursdayEnd,
  setFridayStart,
  setFridayEnd,
  setPriceHour,
  setPriceOverHour,
  setPriceHousehold,
  setPriceLongHousehold,
  setPriceMeal,
  setPriceSnack,
  setMondayCare,
  setTuesdayCare,
  setWednesdayCare,
  setThursdayCare,
  setFridayCare,
  setPage,
  setIsMain,
  setKidId,
} = formSlice.actions;

export default formSlice.reducer;
