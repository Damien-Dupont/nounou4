/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headTitle: undefined,
  daysOfMonth: [],
  eventsOfMonth: [],
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setHeadTitle: (state, action) => {
      state.headTitle = action.payload;
      return state;
    },
    setDaysOfMonth: (state, action) => {
      state.daysOfMonth = action.payload;
      return state;
    },
    setEventsOfMonth: (state, action) => {
      state.eventsOfMonth = action.payload;
      return state;
    },
    setCurrentYear: (state, action) => {
      state.currentYear = action.payload;
      return state;
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
      return state;
    },
  },
});

export const {
  setHeadTitle,
  setCurrentMonth,
  setCurrentYear,
  setDaysOfMonth,
  setEventsOfMonth,
} = generalSlice.actions;

export default generalSlice.reducer;
