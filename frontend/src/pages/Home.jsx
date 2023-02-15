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
            <p>Bonjour !</p>
            <img className="logo" key={logo} src={logo} alt="logo" />
            <p>Bienvenue sur l'application Nounou et Vous</p>
            <p>Pour commencer, connectez-vous ou inscrivez-vous</p>
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
