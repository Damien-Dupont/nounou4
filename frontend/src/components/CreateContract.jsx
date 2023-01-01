/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateContract() {
  const [parentId, setParentId] = useState("");
  const [nannyId, setNannyId] = useState("");
  const [kidId, setKidId] = useState("");
  const [startingDate, setStartingDate] = useState(new Date());

  // useEffect(() => {
  //   "parent";
  // }, [userFirstname, userLastname, userRole, userEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID du parent:
        <input
          id="parentId"
          name="parentId"
          placeholder="vous"
          type="text"
          value={parentId}
          onChange={(event) => setParentId(event.target.value)}
        />
      </label>
      <br />
      <label>
        ID de l'enfant:
        <input
          id="kidId"
          name="kidId"
          placeholder="votre enfant"
          type="text"
          value={kidId}
          onChange={(event) => setKidId(event.target.value)}
        />
      </label>
      <br />
      <label>
        ID de la nounou:
        <input
          id="nannyId"
          name="nannyId"
          placeholder="votre nounou"
          type="text"
          value={nannyId}
          onChange={(event) => setNannyId(event.target.value)}
        />
      </label>
      <br />
      <label>
        Date de début:
        <DatePicker
          selected={startingDate}
          onChange={(date) => setStartingDate(date)}
        />
        {/* <input
          id="userRole"
          name="userRole"
          placeholder="Paretn ou Nounou?"
          type="text"
          value={userRole}
          onChange={(event) => setUserRole(event.target.value)}
        /> */}
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
