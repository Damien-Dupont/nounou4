/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState, useRef } from "react";
import { YearSelect, MonthSelect, DaySelect } from "../methods/TimeSelectors";

export default function CreateKid() {
  const [kidLastname, setKidLastname] = useState("");
  const [kidFirstname, setKidFirstname] = useState("");
  const [kidBirthdate, setKidBirthdate] = useState("");

  const daySelectRef = useRef(null);
  const monthSelectRef = useRef(null);
  const yearSelectRef = useRef(null);

  // useEffect(() => {
  //   "parent";
  // }, [userFirstname, userLastname, userRole, userEmail]);

  // const getDiplome = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/diplome`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setDiplomeData(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log("CreateKid: axios IN");
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/kid`, {
          kidLastname,
          kidFirstname,
          kidBirthdate,
        })
        .then((res) => {
          localStorage.setItem("kidId", res.data.id);
          localStorage.setItem("kidLastname", kidLastname);
          localStorage.setItem("kidFirstname", kidFirstname);
          localStorage.setItem("kidBirthdate", kidBirthdate);
          console.log(res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setKidLastname("");
      setKidFirstname("");
      setKidBirthdate("");
    }
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
    console.log("CreateKid: axios OUT");
  };

  const handleDateOfBirth = (event) => {
    console.log("handleDateOfBirth IN");
    const day = daySelectRef.current.value;
    const month = monthSelectRef.current.value;
    const year = yearSelectRef.current.value;
    const dateOfBirth = `${year}-${month}-${day}`;
    setKidBirthdate(dateOfBirth);
    console.log("handleDateOfBirth OUT");
    handleSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          id="kidLastname"
          name="kidLastname"
          placeholder="Le nom de l'enfant"
          type="text"
          value={kidLastname}
          onChange={(event) => setKidLastname(event.target.value)}
        />
      </label>
      <br />
      <label>
        Prénom:
        <input
          id="kidFirstname"
          name="kidFirstname"
          placeholder="Le prénom de l'enfant"
          type="text"
          value={kidFirstname}
          onChange={(event) => setKidFirstname(event.target.value)}
        />
      </label>
      <br />
      <label>
        Sa date de naissance:
        <select id="birthday" size="4" ref={daySelectRef}>
          <DaySelect />
        </select>
        <select id="birthmonth" size="4" ref={monthSelectRef}>
          <MonthSelect />
        </select>
        <select id="birthyear" size="4" ref={yearSelectRef}>
          <YearSelect />
        </select>
      </label>

      <input type="submit" value="Envoyer" onSubmit={handleDateOfBirth} />
    </form>
  );
}

// function YearSelect() {
//   const years = [];
//   const today = new Date();
//   const thisYear = today.getFullYear();
//   for (let i = thisYear - 10; i <= thisYear; i += 1) {
//     years.push(i);
//   }
//   return (
//     <optgroup>
//       {years.map((year) => (
//         <option value={year}>{year}</option>
//       ))}
//     </optgroup>
//   );
// }

// function MonthSelect() {
//   const months = [];
//   const monthNames = [
//     "--sélectionnez un mois",
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ];

//   for (let i = 0; i <= 12; i += 1) {
//     months.push(i + 1);
//   }
//   return (
//     <optgroup>
//       {months.map((month) => (
//         <option value={month}>{monthNames[month]}</option>
//       ))}
//     </optgroup>
//   );
// }

// function DaySelect() {
//   const days = [];
//   for (let i = 0; i <= days.length; i += 1) {
//     if (i === 0) {
//       days.push("--sélectionnez un jour");
//     } else {
//       days.push(i);
//     }
//   }
//   return (
//     <optgroup>
//       {days.map((day) => (
//         <option value={day}>{day}</option>
//       ))}
//     </optgroup>
//   );
// }
