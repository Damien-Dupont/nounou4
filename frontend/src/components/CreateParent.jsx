/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
// import axios from "axios";

export default function CreateParent() {
  const [userLastname, setUserLastname] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userRole, setUserRole] = useState("parent" || "nounou" || "admin");
  const [userEmail, setUserEmail] = useState("");

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
    console.log(`Lastname: ${userLastname}`);
    console.log(`Firstname: ${userFirstname}`);
    console.log(`Role: ${userRole}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          id="userLastname"
          name="userLastname"
          placeholder="Votre Nom"
          type="text"
          value={userLastname}
          onChange={(event) => setUserLastname(event.target.value)}
        />
      </label>
      <br />
      <label>
        Prénom:
        <input
          id="userFirstname"
          name="userFirstname"
          placeholder="Votre Prénom"
          type="text"
          value={userFirstname}
          onChange={(event) => setUserFirstname(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rôle:
        <input
          id="userRole"
          name="userRole"
          placeholder="Parent ou Nounou?"
          type="text"
          value={userRole}
          onChange={(event) => setUserRole(event.target.value)}
        />
      </label>
      <br />
      <label>
        email:
        <input
          id="userEmail"
          name="userEmail"
          placeholder="email?"
          type="text"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
}
