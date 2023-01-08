/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import axios from "axios";

export default function CreateParent() {
  const [userLastname, setUserLastname] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userRole, setUserRole] = useState("parent" || "nounou" || "admin");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Lastname: ${userLastname}`);
    console.log(`Firstname: ${userFirstname}`);
    console.log(`Email: ${userEmail}`);
    try {
      console.log("CreateParent: axios IN");
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
          userLastname,
          userFirstname,
          userRole,
          userEmail,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("userLastname", userLastname);
          localStorage.setItem("userFirstname", userFirstname);
          localStorage.setItem("userRole", "parent");
          localStorage.setItem("userEmail", userEmail);
          console.log("user created:", res);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setUserLastname("");
      setUserFirstname("");
      setUserRole("");
      setUserEmail("");
    }
    console.log("CreateParent: axios OUT");
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
      {/* <label>
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
      <br /> */}
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
