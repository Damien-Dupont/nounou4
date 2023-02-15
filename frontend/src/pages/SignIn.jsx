/* eslint-disable no-unused-expressions */
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

import Navbar from "../components/Navbar";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    password !== "" && email !== ""
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [password, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
          email,
          password,
        })
        .then((res) => {
          console.log("user created:", res);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="background">
      <Navbar headTitle="Connexion" />
      <div className="allframe">
        <div className="paper">
          {/* <div className="paper__contracts"> */}
          <Box component="form" sx={{ flexGrow: 1 }} onSubmit={handleSubmit}>
            <div>Bonjour !</div>
            <p>Merci d'entre votre email et votre mot de passe</p>

            <TextField
              margin="normal"
              variant="filled"
              sx={{ width: 300 }}
              id="email"
              label="Votre email"
              size="small"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            <div>
              <br />
              <Button
                variant="contained"
                type="submit"
                disabled={isDisabled}
                onClick={(e) => handleSubmit(e)}
              >
                Se connecter
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
