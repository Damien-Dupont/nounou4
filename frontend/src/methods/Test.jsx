/* eslint-disable no-restricted-syntax */
import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Test() {
  const [kidLastname, setKidLastname] = useState("");
  const [kidFirstname, setKidFirstname] = useState("");
  const [kidBirthdate, setKidBirthdate] = useState("");

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
          console.log("kid created:", res);
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

  return (
    <form onSubmit={handleSubmit}>
      {/* <label> */}
      Nom:
      <UseTextField
        id="kidLastname"
        label="Nom de l'enfant"
        size="small"
        value={kidLastname}
        changeState={setKidLastname}
      />
      <input type="submit" value="Envoyer" onSubmit={handleSubmit} />
    </form>
  );
}

function UseTextField(id, label, value, changeState) {
  return (
    <TextField
      id={id}
      label={label}
      size="small"
      value={value}
      onChange={(e) => changeState(e.target.value)}
    />
  );
}
