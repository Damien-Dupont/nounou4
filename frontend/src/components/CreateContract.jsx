/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeSelector from "./TimeSelector";

export default function CreateContract() {
  const [parentId, setParentId] = useState(null);
  const [kidId, setKidId] = useState(null);
  const [caregiver, setCaregiver] = useState("");
  const [startingDate, setStartingDate] = useState(new Date().now());
  const [weeksPerYear, setWeeksPerYear] = useState(0);
  const [mondayStart, setMondayStart] = useState(null);
  const [mondayEnd, setMondayEnd] = useState(null);
  const [tuesdayStart, setTuesdayStart] = useState(null);
  const [tuesdayEnd, setTuesdayEnd] = useState(null);
  const [wednesdayStart, setWednesdayStart] = useState(null);
  const [wednesdayEnd, setWednesdayEnd] = useState(null);
  const [thursdayStart, setThursdayStart] = useState(null);
  const [thursdayEnd, setThursdayEnd] = useState(null);
  const [fridayStart, setFridayStart] = useState(null);
  const [fridayEnd, setFridayEnd] = useState(null);
  // const [priceHour, setPriceHour] = useState(0);
  // const [priceOverHour, setPriceOverHour] = useState(0);
  // const [priceHousehold, setPriceHousehold] = useState(0);
  // const [priceLongHousehold, setPriceLongHousehold] = useState(0);
  // const [priceMeal, setPriceMeal] = useState(0);
  // const [priceSnack, setPriceSnack] = useState(0);

  const [mondayCare, setMondayCare] = useState(true);
  const [tuesdayCare, setTuesdayCare] = useState(true);
  const [wednesdayCare, setWednesdayCare] = useState(true);
  const [thursdayCare, setThursdayCare] = useState(true);
  const [fridayCare, setFridayCare] = useState(true);

  if (localStorage.getItem("kidId") !== null) {
    setKidId(localStorage.getItem("kidId"));
  }
  if (localStorage.getItem("parentId") !== null) {
    setParentId(localStorage.getItem("parentId"));
  }

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
        // priceHour,
        // priceOverHour,
        // priceHousehold,
        // priceLongHousehold,
        // priceMeal,
        // priceSnack,
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
    <form onSubmit={handleSubmit}>
      {parentId === null ? (
        <>
          <label>
            ID du parent:
            <input
              id="parentId"
              name="parentId"
              placeholder="vous"
              type="text"
              value={parentId}
              onChange={(event) => setParentId(event.target.value)}
            />
          </label>
          <br />
        </>
      ) : (
        <>parent connu: {parentId}</>
      )}
      {kidId === null ? (
        <>
          <label>
            ID de l'enfant:
            <input
              id="kidId"
              name="kidId"
              placeholder="votre enfant"
              type="text"
              value={kidId}
              onChange={(event) => setKidId(event.target.value)}
            />
          </label>
          <br />
        </>
      ) : (
        <>enfant connu: {kidId}</>
      )}
      <label>
        Nom de la nounou:
        <input
          id="caregiver"
          name="caregiver"
          placeholder="votre nounou"
          type="text"
          value={caregiver}
          onChange={(event) => setCaregiver(event.target.value)}
        />
      </label>
      <br />
      Date de début:
      <DatePicker
        selected={startingDate}
        onChange={(date) => setStartingDate(date)}
      />
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
      <br />
      Jours de garde:
      <div>
        <div>
          <label>
            Lundi:
            <input
              type="checkbox"
              id="mondayCare"
              name="mondayCare"
              onChange={setMondayCare(!mondayCare)}
              // checked={setMondayCare(!mondayCare)}
            />
            {mondayCare ? (
              <>
                début:
                <TimeSelector
                  selected={mondayStart}
                  onChange={(date) => setMondayStart(date)}
                />
                fin:
                <TimeSelector
                  selected={mondayEnd}
                  onChange={(date) => setMondayEnd(date)}
                />
              </>
            ) : null}
          </label>
        </div>
        <div>
          <label>
            Mardi:
            <input
              type="checkbox"
              id="tuesdayCare"
              name="tuesdayCare"
              onChange={setTuesdayCare(!tuesdayCare)}
              // checked={setMondayCare(!mondayCare)}
            />
            {tuesdayCare ? (
              <>
                début:
                <TimeSelector
                  selected={tuesdayStart}
                  onChange={(date) => setTuesdayStart(date)}
                />
                fin:
                <TimeSelector
                  selected={tuesdayEnd}
                  onChange={(date) => setTuesdayEnd(date)}
                />
              </>
            ) : null}
          </label>
        </div>
        <div>
          <label>
            Mercredi:
            <input
              type="checkbox"
              id="wednesdayCare"
              name="wednesdayCare"
              onChange={setWednesdayCare(!wednesdayCare)}
              // checked={setWednesdayCare(!wednesdayCare)}
            />
            {wednesdayCare ? (
              <>
                début:
                <TimeSelector
                  selected={wednesdayStart}
                  onChange={(date) => setWednesdayStart(date)}
                />
                fin:
                <TimeSelector
                  selected={wednesdayEnd}
                  onChange={(date) => setWednesdayEnd(date)}
                />
              </>
            ) : null}
          </label>
        </div>
        <div>
          <label>
            Jeudi:
            <input
              type="checkbox"
              id="thursdayCare"
              name="thursdayCare"
              onChange={setThursdayCare(!thursdayCare)}
              // checked={setThursdayCare(!thursdayCare)}
            />
            {thursdayCare ? (
              <>
                début:
                <TimeSelector
                  selected={thursdayStart}
                  onChange={(date) => setThursdayStart(date)}
                />
                fin:
                <TimeSelector
                  selected={thursdayEnd}
                  onChange={(date) => setThursdayEnd(date)}
                />
              </>
            ) : null}
          </label>
        </div>
        <div>
          <label>
            Vendredi:
            <input
              type="checkbox"
              id="fridayCare"
              name="fridayCare"
              onChange={setFridayCare(!fridayCare)}
              // checked={setFridayCare(!fridayCare)}
            />
            {fridayCare ? (
              <>
                début:
                <TimeSelector
                  selected={fridayStart}
                  onChange={(date) => setFridayStart(date)}
                />
                fin:
                <TimeSelector
                  selected={fridayEnd}
                  onChange={(date) => setFridayEnd(date)}
                />
              </>
            ) : null}
          </label>
        </div>
      </div>
      <h1>les prix:</h1>
      <label>
        LABEL:
        <input
          id="WeeksPerYear"
          name="WeeksPerYear"
          placeholder="votre nounou"
          type="text"
          value={weeksPerYear}
          onChange={(event) => setWeeksPerYear(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
}
