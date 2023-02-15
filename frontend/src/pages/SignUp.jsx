import "./Contracts.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useSelector, useDispatch } from "react-redux";
import {
  setParentFirstname,
  setParentLastname,
  setParentEmail,
  setUserId,
} from "../redux/parentSlice";

import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";

export default function Signup() {
  const dispatch = useDispatch();

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
  // const [parentId, setParentId] = useState(userId);
  const parentFirstname = useSelector((state) => state.parent.parentFirstname);
  const parentLastname = useSelector((state) => state.parent.parentLastname);
  const parentEmail = useSelector((state) => state.parent.parentEmail);
  const userId = useSelector((state) => state.parent.userId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastname = parentLastname;
    const firstname = parentFirstname;
    const email = parentEmail;
    const roleId = 2;
    try {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/user/add`,
          {
            lastname,
            firstname,
            roleId,
            email,
            password,
          }
          // ,{ withCredentials: true }
        )
        .then((res) => {
          dispatch(setUserId(res.data.id));
          console.log("user created:", res, userId);
        });
      // .finally((window.location.href = "/"));
    } catch (err) {
      console.error(err);
    }
  };

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
    <div className="background">
      <Header />
      <div className="allframe">
        <div className="paper">
          {/* <div className="paper__contracts"> */}
          <Box component="form" sx={{ flexGrow: 1 }} onSubmit={handleSubmit}>
            <div>Bonjour vous...</div>
            <TextField
              sx={{ width: 300 }}
              margin="normal"
              variant="filled"
              id="lastname"
              label="Votre nom"
              size="small"
              value={parentLastname}
              onChange={(event) =>
                dispatch(setParentLastname(event.target.value))
              }
            />
            <TextField
              margin="normal"
              variant="filled"
              sx={{ width: 300 }}
              id="firstname"
              label="Votre prénom"
              size="small"
              value={parentFirstname}
              onChange={(event) =>
                dispatch(setParentFirstname(event.target.value))
              }
            />

            <TextField
              margin="normal"
              variant="filled"
              sx={{ width: 300 }}
              id="email"
              label="Votre email"
              size="small"
              value={parentEmail}
              onChange={(event) => dispatch(setParentEmail(event.target.value))}
            />
            <TextField
              margin="normal"
              variant="filled"
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

            <TextField
              margin="normal"
              variant="filled"
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
            <div>
              <Button
                variant="contained"
                type="submit"
                disabled={isDisabled}
                onClick={(e) => handleSubmit(e)}
              >
                Créer votre compte
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
    // </div>
  );
}

function Header() {
  //   const title = useSelector((state) => state.form.page);
  return (
    <div className="header">
      <img key={logo} className="header__logo" src={logo} alt="logo" />
      <div className="header__month">
        <img src={arrowLeftBlue} alt="arrowLeft" className="hidden" />
        Inscription
        <img src={arrowLeftBlue} alt="arrowRight" className="hidden" />
      </div>
    </div>
  );
}
