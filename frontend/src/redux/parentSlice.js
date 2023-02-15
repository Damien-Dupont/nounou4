/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: undefined,
  parentFirstname: "",
  parentLastname: "",
  kidList: [],
};

const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      return state;
    },
    setParentFirstname: (state, action) => {
      state.parentFirstname = action.payload;
      return state;
    },
    setParentLastname: (state, action) => {
      state.parentLastname = action.payload;
      return state;
    },
    setKidList: (state, action) => {
      state.kidList = action.payload;
      return state;
    },
  },
});

export const { setUserId, setKidList, setParentFirstname, setParentLastname } =
  parentSlice.actions;

export default parentSlice.reducer;
