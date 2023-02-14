/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useEffect, useState } from "react";

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

// const addContractToUser = async (contractId, userId, isMain) => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_BACKEND_URL}/contract/bind`,
//       {
//         isMain: isMain ? 1 : 0,
//         userId,
//         contractId,
//       }
//     );
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

export default function CreateContract() {
  // // dev data
  // localStorage.setItem("userId", 1);
  // localStorage.setItem("lastname", "Dup0nt");
  // localStorage.setItem("firstname", "Dam1en");
  // localStorage.setItem("role", "parent");
  // localStorage.setItem("email", "mon email");
  // user data
  const userId = localStorage.getItem("userId") || undefined;
  const userLastname = localStorage.getItem("lastname") || undefined;
  const userFirstname = localStorage.getItem("firstname") || undefined;
  const [parentId, setParentId] = useState(userId);
  // kid data
  const [kidList, setKidList] = useState([]);
  const [kidId, setKidId] = useState("");
  const [isMain, setIsMain] = useState(true);
  // contract data - about time
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
  // contract data - about prices
  const [priceHour, setPriceHour] = useState(0);
  const [priceOverHour, setPriceOverHour] = useState(0);
  const [priceHousehold, setPriceHousehold] = useState(0);
  const [priceLongHousehold, setPriceLongHousehold] = useState(0);
  const [priceMeal, setPriceMeal] = useState(0);
  const [priceSnack, setPriceSnack] = useState(0);
  // contract data - about days (true or false)
  const [mondayCare, setMondayCare] = useState(false);
  const [tuesdayCare, setTuesdayCare] = useState(false);
  const [wednesdayCare, setWednesdayCare] = useState(false);
  const [thursdayCare, setThursdayCare] = useState(false);
  const [fridayCare, setFridayCare] = useState(false);
  // contract validation page by page
  const [isSumitting, setIsSumitting] = useState(false);
  // const [pageCompleted, setPageCompleted] = useState([false, false, false]);
  // const [nextPageText, setNextPageText] = useState("Suivant");
  function getKidList() {
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
  }

  // const selectKid = (event) => {
  //   console.log("selectKid IN, event: ", event);
  //   setKidId(event.target.value);
  //   setKidLastname(event.target.name);
  //   setKidFirstname(event.target.id);
  // };

  useEffect(() => {
    getKidList();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSumitting) return;
    setIsSumitting(true);

    const days = [
      { name: "Monday", start: mondayStart, end: mondayEnd, care: mondayCare },
      {
        name: "Tuesday",
        start: tuesdayStart,
        end: tuesdayEnd,
        care: tuesdayCare,
      },
      {
        name: "Wednesday",
        start: wednesdayStart,
        end: wednesdayEnd,
        care: wednesdayCare,
      },
      {
        name: "Thursday",
        start: thursdayStart,
        end: thursdayEnd,
        care: thursdayCare,
      },
      { name: "Friday", start: fridayStart, end: fridayEnd, care: fridayCare },
    ];

    for (const day of days) {
      if (!day.care) {
        day.start = undefined;
        day.end = undefined;
      }
      if (
        day.end <= day.start ||
        (day.end === undefined && day.start !== undefined)
      ) {
        throw new Error(
          `${day.name} end time cannot be earlier than start time`
        );
      }
    }
    let postContractCount = 0;
    const postContract = async () => {
      postContractCount++;
      if (postContractCount > 1) {
        throw new Error("Tried to create 2 contracts at once");
      }
      try {
        const contractResponse = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/contract/add`,
          {
            kidId,
            caregiver,
            startingDate,
            weeksPerYear,
            mondayStart: days[0].start,
            mondayEnd: days[0].end,
            tuesdayStart: days[1].start,
            tuesdayEnd: days[1].end,
            wednesdayStart: days[2].start,
            wednesdayEnd: days[2].end,
            thursdayStart: days[3].start,
            thursdayEnd: days[3].end,
            fridayStart: days[4].start,
            fridayEnd: days[4].end,
            priceHour,
            priceOverHour,
            priceHousehold,
            priceLongHousehold,
            priceMeal,
            priceSnack,
            isMain,
            userId,
          }
        );

        const contractId = contractResponse.data.id;

        // await addContractToUser(contractId, userId, isMain);
        return contractId;
      } catch (err) {
        console.error(err);
        return null;
      } finally {
        setIsSumitting(false);
      }
    };

    localStorage.setItem("contractId", postContract());
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
        Contrat principal ?
        <Switch
          // classes={switchStyles}
          checked={isMain}
          onChange={(e) => setIsMain(e.target.checked)}
        />{" "}
        {isMain ? "Oui" : "Non"}
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
            <div>Lundi</div>
            {/* Non */}
            <Switch
              // classes={switchStyles}
              checked={mondayCare}
              onChange={(e) => setMondayCare(e.target.checked)}
            />{" "}
            {/* Oui */}
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
        <button type="submit" value="Envoyer" disabled={isSumitting}>
          {isSumitting ? "En attente" : "Enregistrer"}
        </button>
      </form>
    </LocalizationProvider>
  );
}
