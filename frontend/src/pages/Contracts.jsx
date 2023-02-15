/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
// import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Page1 } from "../components/newContract/Page1";
import { Page2 } from "../components/newContract/Page2";
import { Page3 } from "../components/newContract/Page3";

// import {
//   setUserId,
//   setParentFirstname,
//   setParentLastname,
//   // setKidList,
// } from "../redux/parentSlice";

import { setPage } from "../redux/formSlice";
import Navbar from "../components/Navbar";

import "./Contracts.scss";

export default function Contracts() {
  // const [parentId, setParentId] = useState(userId);
  const page = useSelector((state) => state.form.page);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <div className="background">
        <Navbar headTitle="Contrats" />
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
      <div>
        <div>
          {parentId === undefined ? (
            <>Vous n'êtes pas connecté</>
          ) : (
            <>
              Bonjour {userFirstname} {userLastname}
              <p className="notyou">
                (Ce n'est pas vous?{" "}
                <Link to="/inscription">Se déconnecter</Link>)
              </p>
            </>
          )}
        </div>
      </div>
      <p>Vous n'avez aucun contrat enregistré.</p>
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
