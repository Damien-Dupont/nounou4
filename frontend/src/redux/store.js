import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import parentReducer from "./parentSlice";
import generalReducer from "./generalSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    parent: parentReducer,
    general: generalReducer,
  },
});

export default store;
