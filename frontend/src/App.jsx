/* eslint-disable import/no-extraneous-dependencies */
// import dayjs from "dayjs";
import React from "react";
// import { Routes } from "react-router-dom"; // npm i -S react-router-dom

import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
// import ExportContextUser from "./contexts/UserContext";

import NewContract from "./pages/Contracts";
import MonthPage from "./pages/Month";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  // const { userId } = useContext(ExportContextUser.UserContext);
  return (
    <div className="App">
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          {/* <Coucou /> */}
          <NewContract />
          <MonthPage />
          <Home />
          {/* <Routes> */}
          {/* </Routes> */}
        </LocalizationProvider>
      </Provider>
    </div>
  );
}

export default App;

// function ClearLocalStorage() {
//   localStorage.clear();
//   console.log("cleared");
// }

// function Coucou() {
// return
// <button type="button" onClick={ClearLocalStorage}>
//   Clear Local Storage
// </button>
// }
