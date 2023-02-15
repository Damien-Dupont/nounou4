/* eslint-disable import/no-extraneous-dependencies */
// import dayjs from "dayjs";
import React from "react";

import { Routes, Route } from "react-router-dom"; // npm i -S react-router-dom

import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
// import ExportContextUser from "./contexts/UserContext";

import NewContract from "./pages/Contracts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Month from "./pages/Month";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.scss";

function App() {
  // const { userId } = useContext(ExportContextUser.UserContext);
  return (
    <div className="App">
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          {/* <SignUp /> */}
          {/* <SignIn />
          <NewContract />
          <Month /> */}
          {/* <Home /> */}
          <Routes>
            <Route path="/mescontrats/" element={<NewContract />} />
            {/* <Route path="/mesenfants/" element={<NewKid />} /> */}
            <Route path="/calendrier/" element={<Month />} />
            <Route path="/inscription/" element={<SignUp />} />
            <Route path="/connexion/" element={<SignIn />} />
            <Route path="/oops/" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/adios/" element={<SignOut />} /> */}
          </Routes>
          {/* <Coucou /> */}
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
