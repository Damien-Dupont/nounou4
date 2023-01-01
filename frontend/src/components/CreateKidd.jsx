/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
// import axios from "axios";

export default function CreateKid() {
  const [kidLastname, setKidLastname] = useState("");
  const [kidFirstname, setKidFirstname] = useState("");
  const [kidBirthdate, setKidBirthdate] = useState("");

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
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
    console.log(`Lastname: ${kidLastname}`);
    console.log(`Firstname: ${kidFirstname}`);
    console.log(`Birthdate: ${kidBirthdate}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          id="kidLastname"
          name="kidLastname"
          placeholder="Votre Nom"
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
          placeholder="Votre Prénom"
          type="text"
          value={kidFirstname}
          onChange={(event) => setKidFirstname(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rôle:
        <input
          id="kidBirthdate"
          name="kidBirthdate"
          placeholder="quand?"
          type="date"
          value={kidBirthdate}
          onChange={(event) => setKidBirthdate(event.target.value)}
        />
      </label>

      <input type="submit" value="Envoyer" />
    </form>
  );
}
