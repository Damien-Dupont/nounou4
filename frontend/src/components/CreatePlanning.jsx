import { useState } from "react";

import Switch from "@mui/material/Switch";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";

export default function CreatePlanning() {
  const { daysCare, setDaysCare } = useState([
    { day: "monday", needed: false, start: "", end: "" },
    { day: "tuesday", needed: false, start: "", end: "" },
    { day: "wednesday", needed: false, start: "", end: "" },
    { day: "thursday", needed: false, start: "", end: "" },
    { day: "friday", needed: false, start: "", end: "" },
  ]);
  // TODO: use Redux to store the state of the daysCare array
  return (
    <div className="day1 define-hours">
      <div>Lundi ?</div>
      Non{" "}
      <Switch
        checked={daysCare.Monday.needed}
        onChange={() => setDaysCare(!daysCare.Monday.needed)}
      />{" "}
      Oui
      {daysCare.Monday.needed && (
        <>
          <TimePicker
            label="Lundi débute à..."
            value={daysCare.Monday.start}
            onChange={(newValue) => {
              setDaysCare(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Lundi termine à..."
            value={daysCare.Monday.end}
            onChange={(newValue) => {
              setDaysCare(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Console daysCare={daysCare} />
        </>
      )}
    </div>
  );
}

function Console(daysCare) {
  console.log(daysCare);
  return <div />;
}
