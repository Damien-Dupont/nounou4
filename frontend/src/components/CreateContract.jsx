/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";

import dayjs from "dayjs";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

// import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
// import Checkbox from "../methods/CheckBox";
// import Switch from '@material-ui/core/Switch';

import "./stylesheets/CreateContract.scss";

// import Stack from "@mui/material/Stack";

const locales = ["en", "fr"];

export function LocalizedDatePicker() {
  const [locale, setLocale] = React.useState("fr");
  const [datePickerValue, setDatePickerValue] = React.useState(
    dayjs("2022-04-07")
  );

  const [timePickerValue, setTimePickerValue] = React.useState(
    dayjs("2022-04-07")
  );

  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Stack spacing={3}>
        <ToggleButtonGroup
          value={locale}
          exclusive
          sx={{ mb: 2, display: "block" }}
        >
          {locales.map((localeItem) => (
            <ToggleButton
              key={localeItem}
              value={localeItem}
              onClick={() => selectLocale(localeItem)}
            >
              {localeItem}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <DatePicker
          value={datePickerValue}
          onChange={(newValue) => setDatePickerValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          value={timePickerValue}
          onChange={(newValue) => setTimePickerValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default function CreateContract() {
  const [parentId, setParentId] = useState(undefined);
  const [kidId, setKidId] = useState(undefined);
  const [caregiver, setCaregiver] = useState("");

  const [weeksPerYear, setWeeksPerYear] = useState(0);
  const [startingDate, setStartingDate] = useState("");
  const [mondayStart, setMondayStart] = useState(undefined);
  const [mondayEnd, setMondayEnd] = useState(undefined);
  const [tuesdayStart, setTuesdayStart] = useState(undefined);
  const [tuesdayEnd, setTuesdayEnd] = useState(undefined);
  const [wednesdayStart, setWednesdayStart] = useState(undefined);
  const [wednesdayEnd, setWednesdayEnd] = useState(undefined);
  // const [thursdayStart, setThursdayStart] = useState(undefined);
  // const [thursdayEnd, setThursdayEnd] = useState(undefined);
  // const [fridayStart, setFridayStart] = useState(undefined);
  // const [fridayEnd, setFridayEnd] = useState(undefined);

  const [priceHour, setPriceHour] = useState(0);
  const [priceOverHour, setPriceOverHour] = useState(0);
  const [priceHousehold, setPriceHousehold] = useState(0);
  const [priceLongHousehold, setPriceLongHousehold] = useState(0);
  const [priceMeal, setPriceMeal] = useState(0);
  const [priceSnack, setPriceSnack] = useState(0);

  const [mondayCare, setMondayCare] = useState(false);
  const [tuesdayCare, setTuesdayCare] = useState(false);
  const [wednesdayCare, setWednesdayCare] = useState(false);
  // const [thursdayCare, setThursdayCare] = useState(false);
  // const [fridayCare, setFridayCare] = useState(false);

  // if (localStorage.getItem("kidId") !== null) {
  //   setKidId(localStorage.getItem("kidId"));
  // }
  // if (localStorage.getItem("parentId") !== null) {
  //   setParentId(localStorage.getItem("parentId"));
  // }

  // useEffect(() => {
  //   "parent";
  // }, [userFirstname, userLastname, userRole, userEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log("CreateContract: axios IN");
      const contract = {
        kidId,
        caregiver,
        // startingDate,
        weeksPerYear,
        // mondayStart,
        // mondayEnd,
        // tuesdayStart,
        // tuesdayEnd,
        // wednesdayStart,
        // wednesdayEnd,
        // thursdayStart,
        // thursdayEnd,
        // fridayStart,
        // fridayEnd,
        priceHour,
        priceOverHour,
        priceHousehold,
        priceLongHousehold,
        priceMeal,
        priceSnack,
      };
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/contract`, {
          contract,
        })
        .then((res) => {
          localStorage.setItem("contractId", res.data.id);
          console.log("Contract created:", res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      console.log("CreateContract: axios OUT");
    }
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <form onSubmit={handleSubmit}>
        {/* INSERT PARENT */}
        <div>
          {parentId === undefined ? (
            <>
              <div>ID du parent:</div>
              <TextField
                id="parentId"
                label="Parent (vous)"
                variant="filled"
                size="small"
                value={parentId}
                onChange={(event) => setParentId(event.target.value)}
              />
              <br />
            </>
          ) : (
            <>parent connu: {parentId}</>
          )}
        </div>
        <br />
        {/* INSERT KID */}
        <div>
          {kidId === undefined ? (
            <>
              <div>ID de l'enfant:</div>
              <TextField
                id="kidId"
                label="Parent (vous)"
                variant="filled"
                size="small"
                value={kidId}
                onChange={(event) => setKidId(event.target.value)}
              />

              <br />
            </>
          ) : (
            <>enfant connu: {kidId}</>
          )}
        </div>
        <br />
        {/* INSERT CAREGIVER */}
        <div>
          <div>Nom de la nounou:</div>
          <TextField
            id="caregiver"
            label="Nounou"
            variant="filled"
            size="small"
            value={caregiver}
            onChange={(event) => setCaregiver(event.target.value)}
          />
        </div>{" "}
        <br />
        {/* STARTING DATE */}
        <div>
          {/* <label> */}
          <div>Date de début:</div>
          <StartingDate props={(startingDate, setStartingDate)} />
          {/* </label> */}
          {/* INSERT PRICE PER HOUR */}
        </div>
        <TextField
          type="number"
          label="Prix de l'heure"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">€/h</InputAdornment>
            ),
          }}
        />
        <br />
        {/* INSERT WEEKS PER YEAR */}
        <div>
          <label>
            Nombre de semaines par an:
            <input
              id="WeeksPerYear"
              name="WeeksPerYear"
              placeholder="votre nounou"
              type="text"
              value={weeksPerYear}
              onChange={(event) => setWeeksPerYear(event.target.value)}
            />
          </label>
          {/* INSERT PRICE PER HOUR */}
        </div>
        <h3>PRICES</h3>
        <div>
          <label>
            Prix de l'heure:
            <input
              id="priceHour"
              name="priceHour"
              placeholder="0"
              type="number"
              value={priceHour}
              onChange={(event) => setPriceHour(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Prix de l'heure complémentaire:
            <input
              id="priceHour"
              name="priceHourr"
              placeholder="0"
              type="number"
              value={priceOverHour}
              onChange={(event) => setPriceOverHour(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Prix de l'entretien:
            <input
              id="priceHousehold"
              name="priceHousehold"
              placeholder="0"
              type="number"
              value={priceHousehold}
              onChange={(event) => setPriceHousehold(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Prix de l'entretien au delà de la 9e heure quotidienne:
            <input
              id="priceLongHousehold"
              name="priceLongHousehold"
              placeholder="0"
              type="number"
              value={priceLongHousehold}
              onChange={(event) => setPriceLongHousehold(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Prix du repas:
            <input
              id="priceMeal"
              name="priceMeal"
              placeholder="0"
              type="number"
              value={priceMeal}
              onChange={(event) => setPriceMeal(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Prix du goûter:
            <input
              id="priceSnack"
              name="priceSnack"
              placeholder="0"
              type="number"
              value={priceSnack}
              onChange={(event) => setPriceSnack(event.target.value)}
            />
          </label>
        </div>
        <h3>Horaires</h3>
        <div className="fiveColumns">
          <div className="day1 define-hours">
            <div>Lundi ?</div>
            Non{" "}
            <Switch
              // classes={switchStyles}
              checked={mondayCare}
              onChange={(e) => setMondayCare(e.target.checked)}
            />{" "}
            Oui
            {mondayCare && (
              <>
                <TimePicker
                  label="Lundi débute à..."
                  value={mondayStart}
                  onChange={(newValue) => {
                    setMondayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Lundi termine à..."
                  value={mondayEnd}
                  onChange={(newValue) => {
                    setMondayEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
          <div className="day2 define-hours">
            <div>Mardi?</div>
            Non{" "}
            <Switch
              // classes={switchStyles}
              checked={tuesdayCare}
              onChange={(e) => setTuesdayCare(e.target.checked)}
            />{" "}
            Oui
            {tuesdayCare && (
              <>
                <TimePicker
                  label="Lundi débute à..."
                  value={tuesdayStart}
                  onChange={(newValue) => {
                    setTuesdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Lundi termine à..."
                  value={tuesdayEnd}
                  onChange={(newValue) => {
                    setTuesdayEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
          <div className="day3 define-hours">
            <div>Mercredi?</div>
            Non{" "}
            <Switch
              // classes={switchStyles}
              checked={wednesdayCare}
              onChange={(e) => setWednesdayCare(e.target.checked)}
            />{" "}
            Oui
            {wednesdayCare && (
              <>
                <TimePicker
                  label="Lundi débute à..."
                  value={wednesdayStart}
                  onChange={(newValue) => {
                    setWednesdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Lundi termine à..."
                  value={wednesdayEnd}
                  onChange={(newValue) => {
                    setWednesdayEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
          <div className="day4 define-hours">
            <div>Jeudi?</div>
            Non{" "}
            <Switch
              // classes={switchStyles}
              checked={wednesdayCare}
              onChange={(e) => setWednesdayCare(e.target.checked)}
            />{" "}
            Oui
            {wednesdayCare && (
              <>
                <TimePicker
                  label="Lundi débute à..."
                  value={wednesdayStart}
                  onChange={(newValue) => {
                    setWednesdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Lundi termine à..."
                  value={wednesdayEnd}
                  onChange={(newValue) => {
                    setWednesdayEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
          <div className="day5 define-hours">
            <div>Vendredi?</div>
            Non{" "}
            <Switch
              // classes={switchStyles}
              checked={mondayCare}
              onChange={(e) => setMondayCare(e.target.checked)}
            />{" "}
            Oui
            {mondayCare && (
              <>
                <TimePicker
                  label="Lundi débute à..."
                  value={mondayStart}
                  onChange={(newValue) => {
                    setMondayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Lundi termine à..."
                  value={mondayStart}
                  onChange={(newValue) => {
                    setMondayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </LocalizationProvider>
  );
}

function StartingDate(props) {
  const { startingDate, setStartingDate } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <br />
      <DatePicker
        label="Date de début du contrat"
        value={startingDate}
        onChange={(newValue) => {
          setStartingDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
