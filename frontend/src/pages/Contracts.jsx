/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
// import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import {
  Grid,
  Box,
  TextField,
  Select,
  InputAdornment,
  Switch,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

// import dayjs from "dayjs";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import {
  // setUserId,
  // setParentFirstname,
  // setParentLastname,
  setKidList,
} from "../redux/parentSlice";

import {
  setCaregiver,
  setStartingDate,
  setWeeksPerYear,
  setMondayStart,
  setMondayEnd,
  setTuesdayStart,
  setTuesdayEnd,
  setWednesdayStart,
  setWednesdayEnd,
  setThursdayStart,
  setThursdayEnd,
  setFridayStart,
  setFridayEnd,
  setPriceHour,
  setPriceOverHour,
  setPriceHousehold,
  setPriceLongHousehold,
  setPriceMeal,
  setPriceSnack,
  setMondayCare,
  setTuesdayCare,
  setWednesdayCare,
  setThursdayCare,
  setFridayCare,
  setPage,
  setIsMain,
  setKidId,
} from "../redux/formSlice";

import "./Contracts.scss";
// import React from "react";

import arrowRightBlue from "../assets/arrowRightBlue.svg";
import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";
// import { useEffect } from "react";

// function camelCase(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

export default function Contracts() {
  // const [parentId, setParentId] = useState(userId);
  const page = useSelector((state) => state.form.page);

  // const contract = useSelector((state) => state.contract);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <div className="background">
        <Header />
        <div className="allframe">
          <div className="paper">
            <div className="paper__contracts">
              {page === 0 && <Listing />}
              {page === 1 && <Page1 />}
              {page === 2 && <Page2 />}
              {page === 3 && <Page3 />}
              {page === 4 && <SendContract />}
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

function Header() {
  const page = useSelector((state) => state.form.page);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <img key={logo} className="header__logo" src={logo} alt="logo" />
      <div className="header__month">
        <img
          onClick={() => {
            dispatch(setPage(-1));
          }}
          src={arrowLeftBlue}
          alt="arrowLeft"
          className={page < 2 ? "hidden" : "visible"}
        />
        {page === 0 ? "Contrats" : "Nouveau contrat"}
        <img
          onClick={() => {
            dispatch(setPage(1));
          }}
          src={arrowRightBlue}
          alt="arrowRight"
          className={page < 1 || page > 2 ? "hidden" : "visible"}
        />
      </div>
    </div>
  );
}

function Listing() {
  const dispatch = useDispatch();
  const parentId =
    localStorage.getItem("userId") ||
    useSelector((state) => state.parent.userId);
  // const [parentId, setParentId] = useState(userId);
  const userLastname =
    useSelector((state) => state.parent.parentLastname) ||
    localStorage.getItem("lastname") ||
    undefined;
  const userFirstname =
    useSelector((state) => state.parent.parentFirstname) ||
    localStorage.getItem("firstname") ||
    undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>
        <div>
          {parentId === undefined ? (
            <>Vous n'êtes pas connecté</>
          ) : (
            <>
              <p>Parent employeur: </p>
              <span>
                {userFirstname} {userLastname}
              </span>
              <p className="notyou">
                (Ce n'est pas vous? <a href="/logout">Se déconnecter</a>)
              </p>
            </>
          )}
        </div>
      </p>
      <p>Vous n'avez aucun contrat.</p>
      <Button
        variant="contained"
        type="submit"
        onClick={() => dispatch(setPage(1))}
      >
        Ajouter un contrat
      </Button>
    </Box>
  );
}

function getKidList(parentId) {
  const dispatch = useDispatch();
  if (parentId !== undefined) {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kid/parent/${parentId}`)
      .then((response) => {
        dispatch(setKidList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function Page1() {
  const dispatch = useDispatch();
  const weeksPerYear = useSelector((state) => state.form.weeksPerYear);
  const kidList = useSelector((state) => state.parent.kidList);
  const caregiver = useSelector((state) => state.form.caregiver);
  const kidId = useSelector((state) => state.form.kidId);
  const startingDate = useSelector((state) => state.form.startingDate);
  const isMain = useSelector((state) => state.form.isMain);
  const parentId = useSelector((state) => state.parent.userId);

  if (kidList === undefined) {
    getKidList(parentId);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isMain ? (
        <p>Commençons par quelques questions simples:</p>
      ) : (
        <p>Le contrat est prévu pour une garde occasionnelle</p>
      )}
      <p>Quel enfant voulez-vous confier en garde ?</p>
      <FormControl sx={{ minWidth: 300 }}>
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
          onChange={(event) => dispatch(setKidId(event.target.value))}
        >
          {kidList.map((kid) => (
            <MenuItem key={kid.id} value={`${kid.id}`}>
              {kid.lastname} {kid.firstname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <p>Comment se nomme l'assistant(e) maternel(le) ?</p>
        <TextField
          sx={{ minWidth: 300 }}
          id="caregiver"
          label="Ma/Mon Nounou"
          margin="dense"
          variant="filled"
          size="small"
          value={caregiver}
          onChange={(event) => dispatch(setCaregiver(event.target.value))}
        />
      </div>
      <div>
        <p>Quand démarre le contrat ?</p>
        <DatePicker
          label="Date de début"
          value={startingDate}
          onChange={(event) => {
            dispatch(setStartingDate(event));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div>
        <p>Quelle est sa durée annuelle en semaines ?:</p>
        <TextField
          id="WeeksPerYear"
          type="number"
          margin="dense"
          variant="filled"
          label="Semaines par an"
          value={weeksPerYear}
          onChange={(event) => dispatch(setWeeksPerYear(event.target.value))}
        />
        <p>S'agit-il du contrat principal de votre enfant ?</p>
        <Switch
          // classes={switchStyles}
          checked={isMain}
          onChange={(e) => dispatch(setIsMain(e.target.checked))}
        />{" "}
        {isMain ? "Oui" : "Non"}
        <br />
        {kidId === null || weeksPerYear < 1 ? (
          <Button variant="contained" disabled>
            Continuer
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(setPage(1))}
          >
            continuer
          </Button>
        )}
        <Button
          variant="contained"
          type="submit"
          onClick={() => dispatch(setPage(1))}
        >
          continuer
        </Button>
      </div>
    </Box>
  );
}

function Page2() {
  const dispatch = useDispatch();

  const priceHour = useSelector((state) => state.form.priceHour);
  const priceOverHour = useSelector((state) => state.form.priceOverHour);
  const priceHousehold = useSelector((state) => state.form.priceHousehold);
  const priceLongHousehold = useSelector(
    (state) => state.form.priceLongHousehold
  );
  const priceMeal = useSelector((state) => state.form.priceMeal);
  const priceSnack = useSelector((state) => state.form.priceSnack);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>Parlons argent...</p>
      <Grid
        container
        direction="row"
        columnSpacing={0}
        rowSpacing={2}
        justifyContent="spaceAround"
        alignItems="center"
      >
        <Grid item xs={6}>
          <p>Prix de l'heure normale :</p>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceHour"
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
            onChange={(event) => dispatch(setPriceHour(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'heure
          <br />
          au-delà de 9h par jour :
        </Grid>
        <Grid item xs={5}>
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
            onChange={(event) => dispatch(setPriceOverHour(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'entretien :
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien"
            value={priceHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) =>
              dispatch(setPriceHousehold(event.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'entretien
          <br />
          au-delà de 9h par jour :
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceLongHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien > 9h"
            value={priceLongHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) =>
              dispatch(setPriceLongHousehold(event.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          Prix du repas:
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceMeal"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du repas"
            value={priceMeal}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceMeal(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix du goûter:
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceSnack"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du goûter"
            value={priceSnack}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceSnack(event.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          {priceSnack > 0 &&
          priceMeal > 0 &&
          priceHour > 0 &&
          priceHousehold > 0 ? (
            <Button variant="contained" disabled>
              Continuer
            </Button>
          ) : (
            <Button
              variant="contained"
              type="submit"
              onClick={() => dispatch(setPage(1))}
            >
              continuer
            </Button>
          )}
        </Grid>{" "}
      </Grid>
    </Box>
  );
}

function Page3() {
  const dispatch = useDispatch();

  const mondayCare = useSelector((state) => state.form.mondayCare);
  const tuesdayCare = useSelector((state) => state.form.tuesdayCare);
  const wednesdayCare = useSelector((state) => state.form.wednesdayCare);
  const thursdayCare = useSelector((state) => state.form.thursdayCare);
  const fridayCare = useSelector((state) => state.form.fridayCare);
  const mondayStart = useSelector((state) => state.form.mondayStart);
  const mondayEnd = useSelector((state) => state.form.mondayEnd);
  const tuesdayStart = useSelector((state) => state.form.tuesdayStart);
  const tuesdayEnd = useSelector((state) => state.form.tuesdayEnd);
  const wednesdayStart = useSelector((state) => state.form.wednesdayStart);
  const wednesdayEnd = useSelector((state) => state.form.wednesdayEnd);
  const thursdayStart = useSelector((state) => state.form.thursdayStart);
  const thursdayEnd = useSelector((state) => state.form.thursdayEnd);
  const fridayStart = useSelector((state) => state.form.fridayStart);
  const fridayEnd = useSelector((state) => state.form.fridayEnd);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>Pour finir, parlons horaires...</p>
      <p>Sélectionnez les jours de garde, puis les horaires</p>
      <Grid
        container
        direction="row"
        columnSpacing={0}
        rowSpacing={0}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={4}>
          {mondayCare && (
            <TimePicker
              label="Lundi débute à..."
              value={mondayStart}
              onChange={(newValue) => {
                dispatch(setMondayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Lundi
            <Switch
              // classes={switchStyles}
              checked={mondayCare}
              onChange={(e) => dispatch(setMondayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {mondayCare && (
            <TimePicker
              label="Lundi termine à..."
              value={mondayEnd}
              onChange={(newValue) => {
                dispatch(setMondayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {tuesdayCare && (
            <TimePicker
              label="Mardi débute à..."
              value={tuesdayStart}
              onChange={(newValue) => {
                dispatch(setTuesdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Mardi
            <Switch
              // classes={switchStyles}
              checked={tuesdayCare}
              onChange={(e) => dispatch(setTuesdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {tuesdayCare && (
            <TimePicker
              label="Mardi termine à..."
              value={tuesdayEnd}
              onChange={(newValue) => {
                dispatch(setTuesdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {wednesdayCare && (
            <TimePicker
              label="Mercredi débute à..."
              value={wednesdayStart}
              onChange={(newValue) => {
                dispatch(setWednesdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Mercredi
            <Switch
              // classes={switchStyles}
              checked={wednesdayCare}
              onChange={(e) => dispatch(setWednesdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {wednesdayCare && (
            <TimePicker
              label="Mercredi termine à..."
              value={wednesdayEnd}
              onChange={(newValue) => {
                dispatch(setWednesdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {thursdayCare && (
            <TimePicker
              label="Jeudi débute à..."
              value={thursdayStart}
              onChange={(newValue) => {
                dispatch(setThursdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Jeudi
            <Switch
              // classes={switchStyles}
              checked={thursdayCare}
              onChange={(e) => dispatch(setThursdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {thursdayCare && (
            <TimePicker
              label="Jeudi termine à..."
              value={thursdayEnd}
              onChange={(newValue) => {
                dispatch(setThursdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {fridayCare && (
            <TimePicker
              label="Vendredi débute à..."
              value={fridayStart}
              onChange={(newValue) => {
                dispatch(setFridayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Vendredi
            <Switch
              // classes={switchStyles}
              checked={fridayCare}
              onChange={(e) => dispatch(setFridayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {fridayCare && (
            <TimePicker
              label="Vendredi termine à..."
              value={fridayEnd}
              onChange={(newValue) => {
                dispatch(setFridayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {mondayCare === false &&
          tuesdayCare === false &&
          wednesdayCare === false &&
          thursdayCare === false &&
          fridayCare === false ? (
            <Button variant="contained" disabled>
              Enregistrer
            </Button>
          ) : (
            <Button
              variant="contained"
              type="submit"
              onClick={() => dispatch(setPage(1))}
            >
              Enregistrer
            </Button>
          )}
        </Grid>{" "}
      </Grid>
    </Box>
  );
}

function SendContract() {
  const dispatch = useDispatch();
  const mondayStart = useSelector((state) => state.mondayStart);
  const mondayEnd = useSelector((state) => state.mondayEnd);
  const mondayCare = useSelector((state) => state.mondayCare);
  const tuesdayStart = useSelector((state) => state.tuesdayStart);
  const tuesdayEnd = useSelector((state) => state.tuesdayEnd);
  const tuesdayCare = useSelector((state) => state.tuesdayCare);
  const wednesdayStart = useSelector((state) => state.wednesdayStart);
  const wednesdayEnd = useSelector((state) => state.wednesdayEnd);
  const wednesdayCare = useSelector((state) => state.wednesdayCare);
  const thursdayStart = useSelector((state) => state.thursdayStart);
  const thursdayEnd = useSelector((state) => state.thursdayEnd);
  const thursdayCare = useSelector((state) => state.thursdayCare);
  const fridayStart = useSelector((state) => state.fridayStart);
  const fridayEnd = useSelector((state) => state.fridayEnd);
  const fridayCare = useSelector((state) => state.fridayCare);
  const userId = useSelector((state) => state.userId);
  const kidId = useSelector((state) => state.kidId);
  const caregiver = useSelector((state) => state.caregiver);
  const startingDate = useSelector((state) => state.startingDate);
  const weeksPerYear = useSelector((state) => state.weeksPerYear);
  const priceHour = useSelector((state) => state.priceHour);
  const priceOverHour = useSelector((state) => state.priceOverHour);
  const priceHousehold = useSelector((state) => state.priceHousehold);
  const priceLongHousehold = useSelector((state) => state.priceLongHousehold);
  const priceMeal = useSelector((state) => state.priceMeal);
  const priceSnack = useSelector((state) => state.priceSnack);
  const isMain = useSelector((state) => state.isMain);

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
      throw new Error(`${day.name} end time cannot be earlier than start time`);
    }
  }
  let postContractCount = 0;
  // eslint-disable-next-line no-unused-vars
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
      console.log(postContract);
      const contractId = contractResponse.data.id;

      return contractId;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      dispatch(setPage(0));
    }
  };
  return <>Waiting</>;
}
