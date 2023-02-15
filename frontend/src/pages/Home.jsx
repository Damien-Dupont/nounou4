import React from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import "./Home.scss";
import Navbar from "../components/Navbar";
import logo from "../assets/logow.png";

export default function Home() {
  return (
    <>
      <Navbar headTitle="Bienvenue" />
      <div className="allframe">
        <Box sx={{ flexGrow: 1 }}>
          <div className="paper home">
            <p>Bienvenue sur l'application </p>
            <div className="logotitle">
              <div className="logo__nounou">Nounou</div>
              <img className="logo" key={logo} src={logo} alt="logo" />
              <div className="logo__nous">Nous</div>
            </div>
            <p>
              Pour commencer,
              <br />
              connectez-vous ou inscrivez-vous
            </p>
            <Button variant="contained" type="submit" as={Link} to="/connexion">
              Me connecter
            </Button>{" "}
            <Button
              as={Link}
              to="/inscription"
              variant="contained"
              type="submit"
            >
              Créer un compte
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
