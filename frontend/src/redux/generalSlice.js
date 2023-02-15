/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headTitle: undefined,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setHeadTitle: (state, action) => {
      state.headTitle = action.payload;
      return state;
    },
  },
});

export const { setHeadTitle } = generalSlice.actions;

export default generalSlice.reducer;
