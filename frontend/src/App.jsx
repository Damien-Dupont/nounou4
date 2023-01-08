// import dayjs from "dayjs";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        Home
        <Home />
      </LocalizationProvider>
    </div>
  );
}

export default App;
