/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimeSelector from "./TimeSelector";

export default function CreateContract() {
  const [parentId, setParentId] = useState(undefined);
  const [kidId, setKidId] = useState(undefined);
  const [caregiver, setCaregiver] = useState("");

  const [weeksPerYear, setWeeksPerYear] = useState(0);
  // const [startingDate, setStartingDate] = useState("");
  // const [mondayStart, setMondayStart] = useState(undefined);
  // const [mondayEnd, setMondayEnd] = useState(undefined);
  // const [tuesdayStart, setTuesdayStart] = useState(undefined);
  // const [tuesdayEnd, setTuesdayEnd] = useState(undefined);
  // const [wednesdayStart, setWednesdayStart] = useState(undefined);
  // const [wednesdayEnd, setWednesdayEnd] = useState(undefined);
  // const [thursdayStart, setThursdayStart] = useState(undefined);
  // const [thursdayEnd, setThursdayEnd] = useState(undefined);
  // const [fridayStart, setFridayStart] = useState(undefined);
  // const [fridayEnd, setFridayEnd] = useState(undefined);

  const [priceHour, setPriceHour] = useState(0);
  // const [priceOverHour, setPriceOverHour] = useState(0);
  // const [priceHousehold, setPriceHousehold] = useState(0);
  // const [priceLongHousehold, setPriceLongHousehold] = useState(0);
  // const [priceMeal, setPriceMeal] = useState(0);
  // const [priceSnack, setPriceSnack] = useState(0);

  // const [mondayCare, setMondayCare] = useState(true);
  // const [tuesdayCare, setTuesdayCare] = useState(true);
  // const [wednesdayCare, setWednesdayCare] = useState(true);
  // const [thursdayCare, setThursdayCare] = useState(true);
  // const [fridayCare, setFridayCare] = useState(true);

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
      {/* INSERT PARENT */}
      <div>
        {parentId === undefined ? (
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
      </div>
      <br />
      {/* INSERT KID */}
      <div>
        {kidId === undefined ? (
          <>
            <label>
              ID de l'enfant:
              <input
                id="kidId"
                name="kidId"
                placeholder="vous"
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
      </div>
      <br />
      {/* INSERT CAREGIVER */}
      <div>
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
      </div>
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
      <br />
      <div>
        <label>
          Prix de l'heure:
          <input
            id="priceHour"
            name="priceHourr"
            placeholder="en euros de l'heure"
            type="text"
            value={priceHour}
            onChange={(event) => setPriceHour(event.target.value)}
          />
        </label>
      </div>
      <br />

      <input type="submit" value="Envoyer" />
    </form>
  );
}

// const [priceOverHour, setPriceOverHour] = useState(0);
//   const [priceHousehold, setPriceHousehold] = useState(0);
//   const [priceLongHousehold, setPriceLongHousehold] = useState(0);
//   const [priceMeal, setPriceMeal] = useState(0);
//   const [priceSnack, setPriceSnack] = useState(0);

// function InsertMonday(
//   dayCare,
//   setDayCare,
//   dayStart,
//   dayEnd,
//   setDayStart,
//   setDayEnd
// ) {
//   return (
//     <label>
//       Lundi:
//       <input
//         type="checkbox"
//         id="MondayCare"
//         name="MondayCare"
//         onChange={setDayCare(!dayCare)}
//         // checked={setMondayCare(!mondayCare)}
//       />
//       {dayCare ? (
//         <>
//           début:
//           <TimeSelector
//             selected={dayStart}
//             onChange={(date) => setDayStart(date)}
//           />
//           fin:
//           <TimeSelector
//             selected={dayEnd}
//             onChange={(date) => setDayEnd(date)}
//           />
//         </>
//       ) : null}
//     </label>
//   );
// }

// function InsertPriceHour(price, setPrice) {
//   return (
//     <label>
//       Prix de l'heure:
//       <input
//         id="priceHour"
//         name="priceHourr"
//         placeholder="en euros de l'heure"
//         type="text"
//         value={price}
//         onChange={(event) => setPrice(event.target.value)}
//       />
//     </label>
//   );
// }

// // function InsertDay(day, setDayCare, setDayStart, setDayEnd) {
// //   return (
// //     <label>
// //       {day}:
// //       <input
// //         type="checkbox"
// //         id={`${day}Care`}
// //         name={`${day}Care`}
// //         onChange={setDayCare(!day)}
// //         // checked={setMondayCare(!mondayCare)}
// //       />
// //       {mondayCare ? (
// //         <>
// //           début:
// //           <TimeSelector
// //             selected={mondayStart}
// //             onChange={(date) => setMondayStart(date)}
// //           />
// //           fin:
// //           <TimeSelector
// //             selected={mondayEnd}
// //             onChange={(date) => setMondayEnd(date)}
// //           />
// //         </>
// //       ) : null}
// //     </label>
// //   );
// // }
