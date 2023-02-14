// import dayjs from "dayjs";
import React from "react";
// import { Routes } from "react-router-dom"; // npm i -S react-router-dom

import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// import ExportContextUser from "./contexts/UserContext";

import MonthPage from "./pages/Month";
import Home from "./pages/Home";
import "./App.css";

function App() {
  // const { userId } = useContext(ExportContextUser.UserContext);
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        {/* <Coucou /> */}
        <MonthPage />
        <Home />
        {/* <Routes> */}
        {/* </Routes> */}
      </LocalizationProvider>
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
