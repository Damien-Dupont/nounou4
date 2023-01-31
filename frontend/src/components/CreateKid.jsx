import React, { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import ConvertDate from "./methods/ConvertDate";

export default function CreateKid() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [kidBirthdate, setKidBirthdate] = useState(Date.now());
  const parent = localStorage.getItem("userId");

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const birthdate = ConvertDate(kidBirthdate);
      console.log("birthdate", kidBirthdate, " => ", birthdate);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/kid/add`, {
          lastname,
          firstname,
          birthdate,
          parent,
        })
        .then((res) => {
          localStorage.setItem("kidId", res.data.id);
          localStorage.setItem("kidLastname", lastname);
          localStorage.setItem("kidFirstname", firstname);
          localStorage.setItem("kidBirthdate", kidBirthdate);
          localStorage.setItem("kidParent", parent);
          console.log("Kid Created:", res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setLastname("");
      setFirstname("");
      setKidBirthdate(Date.now());
    }
  };

  return (
    <Box
      component="form"
      sx={{ width: 300, height: 400 }}
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <div>L'enfant</div>
      <TextField
        margin="normal"
        variant="filled"
        sx={{ width: 300 }}
        id="lastname"
        label="Son nom"
        size="small"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <TextField
        margin="normal"
        variant="filled"
        sx={{ width: 300 }}
        id="firstname"
        label="Son prénom"
        size="small"
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
      />
      <br />
      <br />
      <DatePicker
        inputFormat="DD-MM-YYYY"
        margin="normal"
        variant="filled"
        label="Sa date de naissance"
        value={kidBirthdate}
        onChange={(newValue) => {
          setKidBirthdate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <br />
      <input type="submit" value="Envoyer" onSubmit={handleSubmit} />
      {/* </form> */}
    </Box>
  );
}
