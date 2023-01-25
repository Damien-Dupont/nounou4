/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Box, TextField, IconButton, InputAdornment } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CreateParent() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [role, setRole] = useState("parent" || "nounou" || "admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CreateParent: handleSubmit IN");
    console.log("CreateParent: lastname:", lastname);
    console.log("CreateParent: firstname:", firstname);
    console.log("CreateParent: role:", role);
    console.log("CreateParent: email:", email);
    console.log("CreateParent: password:", password);
    // const roleid = role === "parent" ? 2 : 3;
    const roleid = 2;
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
          lastname,
          firstname,
          roleid,
          email,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("lastname", lastname);
          localStorage.setItem("firstname", firstname);
          localStorage.setItem("role", "parent");
          localStorage.setItem("email", email);
          console.log("user created:", res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setLastname("");
      setFirstname("");
      setRole("");
      setEmail("");
    }
    console.log("CreateParent: axios OUT");
  };

  // function verifyPassword(password, passwordConfirm) {
  //   // const az = /^(?=.*[a-z])/.test(password);
  //   // const AZ = /^(?=.*[A-Z])/.test(password);
  //   // const num = /^(?=.*\d)/.test(password);
  //   // const char = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password);
  //   const len = password.length > 7;
  //   const same = password === passwordConfirm;

  //   setPasswordError({ az: true, AZ: true, num: true, char: true, len, same });
  //   // let string = "Ajoutez ";
  //   // az ? (string += "") : (string += "une minuscule, ");
  //   // AZ ? (string += "") : (string += "une majuscule, ");
  //   // num ? (string += "") : (string += "un chiffre, ");
  //   // char ? (string += "") : (string += "un caractère spécial, ");

  //   return passwordError;
  // }

  useEffect(() => {
    if (password === passwordConfirm && password.length > 7) {
      setIsDisabled(false);
      setPasswordError(false);
    } else {
      setIsDisabled(true);
      setPasswordError(true);
    }
    if (password === "" || passwordConfirm === "") {
      setPasswordError(false);
    }
  }, [password, passwordConfirm]);

  return (
    <Box
      component="form"
      sx={{ width: 300, height: 400 }}
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <div>Vous, le parent</div>
      <TextField
        margin="normal"
        sx={{ width: 300 }}
        id="lastname"
        label="Votre nom"
        size="small"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <TextField
        margin="normal"
        sx={{ width: 300 }}
        id="firstname"
        label="Votre prénom"
        size="small"
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
      />
      <br />
      <TextField
        margin="normal"
        sx={{ width: 300 }}
        id="email"
        label="Votre email"
        size="small"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        margin="normal"
        sx={{ width: 300 }}
        id="password"
        label="Votre mot de passe"
        type={showPassword ? "text" : "password"}
        size="small"
        value={password}
        helperText={
          password.length < 8
            ? "8 caractères minimum"
            : "Longueur minimale atteinte. Merci!"
        }
        onChange={(event) => {
          // verifyPassword(event.target.value, passwordConfirm);
          setPassword(event.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        margin="normal"
        sx={{ width: 300 }}
        error={passwordError}
        id="passwordConfirm"
        type={showPasswordConfirm ? "text" : "password"}
        label="Confirmez votre mot de passe"
        size="small"
        helperText={
          passwordError ? "Les mots de passe doivent correspondre" : ""
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={passwordConfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />
      <br />
      <input type="submit" value="Envoyer" disabled={isDisabled} />
      {/* </form> */}
    </Box>
  );
}
