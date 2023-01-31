/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useEffect, useState } from "react";
// import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

// import Stack from "@mui/material/Stack";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import InputAdornment from "@mui/material/InputAdornment";
// import Switch from "@mui/material/Switch";

import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Select,
  InputAdornment,
  Switch,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import dayjs from "dayjs";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

// import { styled } from "@mui/material/styles";
// import Checkbox from "../methods/CheckBox";

import "./stylesheets/CreateContract.scss";
// import ConvertDate from "./methods/ConvertDate";

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
  // dev data
  localStorage.setItem("userId", 1);
  localStorage.setItem("lastname", "Dup0nt");
  localStorage.setItem("firstname", "Dam1en");
  localStorage.setItem("role", "parent");
  localStorage.setItem("email", "mon email");
  // user data
  const userId = localStorage.getItem("userId") || undefined;
  const userLastname = localStorage.getItem("lastname") || undefined;
  const userFirstname = localStorage.getItem("firstname") || undefined;
  const [parentId, setParentId] = useState(userId);
  // kid data
  const [kidList, setKidList] = useState([]);
  // const [kidLastname, setKidLastname] = useState(undefined);
  // const [kidFirstname, setKidFirstname] = useState(undefined);
  const [kidId, setKidId] = useState("");
  // contract data
  const [caregiver, setCaregiver] = useState("");
  const [weeksPerYear, setWeeksPerYear] = useState(0);
  const [startingDate, setStartingDate] = useState(Date.now());
  const [mondayStart, setMondayStart] = useState(undefined);
  const [mondayEnd, setMondayEnd] = useState(undefined);
  const [tuesdayStart, setTuesdayStart] = useState(undefined);
  const [tuesdayEnd, setTuesdayEnd] = useState(undefined);
  const [wednesdayStart, setWednesdayStart] = useState(undefined);
  const [wednesdayEnd, setWednesdayEnd] = useState(undefined);
  const [thursdayStart, setThursdayStart] = useState(undefined);
  const [thursdayEnd, setThursdayEnd] = useState(undefined);
  const [fridayStart, setFridayStart] = useState(undefined);
  const [fridayEnd, setFridayEnd] = useState(undefined);

  const [priceHour, setPriceHour] = useState(0);
  const [priceOverHour, setPriceOverHour] = useState(0);
  const [priceHousehold, setPriceHousehold] = useState(0);
  const [priceLongHousehold, setPriceLongHousehold] = useState(0);
  const [priceMeal, setPriceMeal] = useState(0);
  const [priceSnack, setPriceSnack] = useState(0);

  const [mondayCare, setMondayCare] = useState(false);
  const [tuesdayCare, setTuesdayCare] = useState(false);
  const [wednesdayCare, setWednesdayCare] = useState(false);
  const [thursdayCare, setThursdayCare] = useState(false);
  const [fridayCare, setFridayCare] = useState(false);
  // const [care, setCare] = useState([true, false, false, false, false]);

  const getKidList = () => {
    if (parentId !== undefined) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/kid/parent/${parentId}`)
        .then((response) => {
          setKidList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const selectKid = (event) => {
  //   console.log("selectKid IN, event: ", event);
  //   setKidId(event.target.value);
  //   setKidLastname(event.target.name);
  //   setKidFirstname(event.target.id);
  // };

  useEffect(() => {
    getKidList();
  }, []);

  // useEffect(() => {
  //   const url = `${import.meta.env.VITE_BACKEND_URL}/kid/all`;
  //   axios
  //     .get(url)
  //     .then((response) => console.log("allKidList: ", response.data))
  //     .catch((error) => console.log("allkids", error));
  // }, [userId]);

  // const periodsList = [
  //   { en: "mondayStart", fr: "Lundi", day: 0 },
  //   { en: "mondayEnd", fr: "Lundi", day: 0 },
  //   { en: "tuesdayStart", fr: "Mardi", day: 2 },
  //   { en: "tuesdayEnd", fr: "Mardi", day: 2 },
  //   { en: "wednesdayStart", fr: "Mercredi", day: 3 },
  //   { en: "wednesdayEnd", fr: "Mercredi", day: 3 },
  //   { en: "thursdayStart", fr: "Jeudi", day: 4 },
  //   { en: "thursdayEnd", fr: "Jeudi", day: 4 },
  //   { en: "fridayStart", fr: "Vendredi", day: 5 },
  //   { en: "fridayEnd", fr: "Vendredi", day: 5 },
  // ];

  // const handleTimeChange = (time, day) => {
  //   switch (day) {
  //     case "mondayStart":
  //       setMondayStart(time);
  //       break;
  //     case "mondayEnd":
  //       setMondayEnd(time);
  //       break;
  //     case "tuesdayStart":
  //       setTuesdayStart(time);
  //       break;
  //     case "tuesdayEnd":
  //       setTuesdayEnd(time);
  //       break;
  //     case "wednesdayStart":
  //       setWednesdayStart(time);
  //       break;
  //     case "wednesdayEnd":
  //       setWednesdayEnd(time);
  //       break;
  //     case "thursdayStart":
  //       setThursdayStart(time);
  //       break;
  //     case "thursdayEnd":
  //       setThursdayEnd(time);
  //       break;
  //     case "fridayStart":
  //       setFridayStart(time);
  //       break;
  //     case "fridayEnd":
  //       setFridayEnd(time);
  //       break;

  //     // case "mondayStartLundi":
  //     //   setCare[0] = !care[0];
  //     //   break;

  //     // case "tuesdayStartMardi":
  //     //   setCare[1] = !care[1];
  //     //   break;

  //     // case "wednesdayStartMercredi":
  //     //   setCare[2] = !care[2];
  //     //   break;

  //     // case "thursdayStartJeudi":
  //     //   setCare[3] = !care[3];
  //     //   break;

  //     // case "fridayStartVendredi":
  //     //   setCare[4] = !care[4];
  //     // break;

  //     default:
  //       console.log("error");
  //   }
  // };

  const handleSubmit = (event) => {
    // prepare data
    event.preventDefault();
    if (mondayCare === false) {
      setMondayStart(undefined);
      setMondayEnd(undefined);
    }
    if (tuesdayCare === false) {
      setTuesdayStart(undefined);
      setTuesdayEnd(undefined);
    }
    if (wednesdayCare === false) {
      setWednesdayStart(undefined);
      setWednesdayEnd(undefined);
    }
    if (thursdayCare === false) {
      setThursdayStart(undefined);
      setThursdayEnd(undefined);
    }
    if (fridayCare === false) {
      setFridayStart(undefined);
      setFridayEnd(undefined);
    }

    // TODO: check if dayEnd > dayStart * 5

    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/contract/add`, {
          kidId,
          caregiver,
          startingDate,
          weeksPerYear,
          mondayStart,
          mondayEnd,
          tuesdayStart,
          tuesdayEnd,
          wednesdayStart,
          wednesdayEnd,
          thursdayStart,
          thursdayEnd,
          fridayStart,
          fridayEnd,
          priceHour,
          priceOverHour,
          priceHousehold,
          priceLongHousehold,
          priceMeal,
          priceSnack,
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
                margin="dense"
                variant="filled"
                size="small"
                value={parentId}
                onChange={(event) => setParentId(event.target.value)}
              />
              <br />
            </>
          ) : (
            <>
              Parent employeur: {userFirstname} {userLastname}
              <br />
              (Ce n'est pas vous? <a href="/logout">Se déconnecter</a>)
            </>
          )}
        </div>
        <br />
        {/* INSERT KID */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="kid-select-label">Sélectionner l'enfant</InputLabel>
          <Select
            size="small"
            margin="dense"
            variant="filled"
            width="100%"
            labelId="kid-select-label"
            id="kid-select"
            value={kidId}
            label="Enfant"
            onChange={(event) => setKidId(event.target.value)}
          >
            {kidList.map((kid) => (
              <MenuItem key={kid.id} value={`${kid.id}`}>
                {kid.lastname} {kid.firstname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        {/* INSERT CAREGIVER */}
        <div>
          <div>Nom de la nounou:</div>
          <TextField
            id="caregiver"
            label="Nounou"
            margin="dense"
            variant="filled"
            size="small"
            value={caregiver}
            onChange={(event) => setCaregiver(event.target.value)}
          />
        </div>{" "}
        <br />
        {/* STARTING DATE */}
        <div>
          <div>Date de début:</div>
          <DatePicker
            label="Date de début du contrat"
            value={startingDate}
            onChange={(event) => {
              setStartingDate(event);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <br />
        {/* INSERT WEEKS PER YEAR */}
        <div>
          Nombre de semaines par an:
          <TextField
            id="WeeksPerYear"
            type="number"
            margin="dense"
            variant="filled"
            label="Semaines par an"
            value={weeksPerYear}
            onChange={(event) => setWeeksPerYear(event.target.value)}
          />
          {/* INSERT PRICE PER HOUR */}
        </div>
        <h3>PRICES</h3>
        <div>
          Prix de l'heure:
          <TextField
            id="pricePerHour"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix de l'heure"
            value={priceHour}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/h</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceHour(event.target.value)}
          />
        </div>
        <br />
        <div>
          Prix de l'heure complémentaire:
          <TextField
            id="priceOverHour"
            type="number"
            margin="dense"
            variant="filled"
            label="L'heure complémentaire"
            value={priceOverHour}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/h</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceOverHour(event.target.value)}
          />
        </div>
        <br />
        <div>
          Prix de l'entretien:
          <TextField
            id="priceHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien"
            value={priceHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceHousehold(event.target.value)}
          />
        </div>
        <br />
        <div>
          Prix de l'entretien au delà de la 9e heure quotidienne:
          <TextField
            id="priceLongHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien > 9h"
            value={priceLongHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceLongHousehold(event.target.value)}
          />
        </div>
        <br />
        <div>
          Prix du repas:
          <TextField
            id="priceMeal"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du repas"
            value={priceMeal}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceMeal(event.target.value)}
          />
        </div>
        <br />
        <div>
          Prix du goûter:
          <TextField
            id="priceSnack"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du goûter"
            value={priceSnack}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            onChange={(event) => setPriceSnack(event.target.value)}
          />
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
                <br />
                <TimePicker
                  label="Lundi débute à..."
                  value={mondayStart}
                  onChange={(newValue) => {
                    setMondayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <br />
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
                <br />
                <TimePicker
                  label="Mardi débute à..."
                  value={tuesdayStart}
                  onChange={(newValue) => {
                    setTuesdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <TimePicker
                  label="Mardi termine à..."
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
                <br />
                <TimePicker
                  label="Mercredi débute à..."
                  value={wednesdayStart}
                  onChange={(newValue) => {
                    setWednesdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <TimePicker
                  label="Mercredi termine à..."
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
              checked={thursdayCare}
              onChange={(e) => setThursdayCare(e.target.checked)}
            />{" "}
            Oui
            {thursdayCare && (
              <>
                <br />
                <TimePicker
                  label="Jeudi débute à..."
                  value={thursdayStart}
                  onChange={(newValue) => {
                    setThursdayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <TimePicker
                  label="Jeudi termine à..."
                  value={thursdayEnd}
                  onChange={(newValue) => {
                    setThursdayEnd(newValue);
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
              checked={fridayCare}
              onChange={(e) => setFridayCare(e.target.checked)}
            />{" "}
            Oui
            {fridayCare && (
              <>
                <br />
                <TimePicker
                  label="Vendredi débute à..."
                  value={fridayStart}
                  onChange={(newValue) => {
                    console.log(newValue);
                    setFridayStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <TimePicker
                  label="Vendredi termine à..."
                  value={fridayEnd}
                  onChange={(newValue) => {
                    setFridayEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </>
            )}
          </div>
          {/* <div className="define-hours">
            {periodsList.map((period) => (
              <div key={period.en}>
                {period.en.includes("Start") && (
                  <>
                    <div>{period.fr}?</div>
                    Non{" "}
                    <Switch
                      // classes={switchStyles}
                      checked={care[period.day]}
                      // onChange={(e) =>
                      //   handleTimeChange(e, `${period.en}+${period.fr}}`)
                      // }
                      onchange={() => {
                        console.log("care", care);
                        setCare(!care[period.day]);
                      }}
                    />{" "}
                    Oui
                  </>
                )}
                {care[period.day] && (
                  <TimePicker
                    width="100%"
                    label={
                      period.en.includes("Start")
                        ? `${period.fr} débute à...`
                        : `${period.fr} termine à...`
                    }
                    value=""
                    onChange={(newValue) => {
                      handleTimeChange(newValue, period.en);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                )}
              </div>
            ))}
          </div>{" "} */}
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </LocalizationProvider>
  );
}
