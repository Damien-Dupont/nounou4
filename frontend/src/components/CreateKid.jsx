/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ConvertDate from "./methods/ConvertDate";

export default function CreateKid() {
  const [kidLastname, setKidLastname] = useState("");
  const [kidFirstname, setKidFirstname] = useState("");
  const [kidBirthdate, setKidBirthdate] = useState(Date.now());

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Lastname: ${kidLastname}`);
    console.log(`Firstname: ${kidFirstname}`);
    console.log(`Birthdate: ${kidBirthdate}`);
    try {
      console.log("CreateKid: axios IN");
      setKidBirthdate(ConvertDate(kidBirthdate));
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
          console.log("kid created:", res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setKidLastname("");
      setKidFirstname("");
      setKidBirthdate(Date.now());
    }
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
    console.log("CreateKid: axios OUT");
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <div>L'enfant</div>
        <TextField
          id="kidLastname"
          label="Son nom"
          size="small"
          value={kidLastname}
          onChange={(event) => setKidLastname(event.target.value)}
        />
        <TextField
          id="kidFirstname"
          label="Son prénom"
          size="small"
          value={kidFirstname}
          onChange={(event) => setKidFirstname(event.target.value)}
        />
        <br />
        <br />
        <DatePicker
          inputFormat="DD-MM-YYYY"
          label="Sa date de naissance"
          value={kidBirthdate}
          onChange={(newValue) => {
            setKidBirthdate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <br />
        <input type="submit" value="Envoyer" onSubmit={handleSubmit} />
      </form>
    </>
  );
}
