/* eslint-disable no-unused-expressions */
import "./Contracts.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./SignIn.scss";

import { Box, TextField, Button } from "@mui/material";

import {
  setUserId,
  setParentFirstname,
  setParentLastname,
} from "../redux/parentSlice";

import Navbar from "../components/Navbar";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    password !== "" && email !== ""
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [password, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/`, {
          email,
          password,
        })
        .then((res) => {
          console.log("user authenticated:", res);
          dispatch(setUserId(res.data.id));
          dispatch(setParentFirstname(res.data.firstname));
          dispatch(setParentLastname(res.data.lastname));
          setPassword("");
          window.location.href = "/mescontrats";
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
            <div>Pas de souci !</div>
            <p>Merci de renseigner votre email et on s'occupe du reste</p>

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
