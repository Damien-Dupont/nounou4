import React, { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function CreateUserContract() {
  const [userTemp, setUserTemp] = useState(0);
  const [contractTemp, setContractTemp] = useState(0);
  const [isMainTemp, setIsMainTemp] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const isMain = `${isMainTemp}`;
      const user = `${userTemp}`;
      const contract = `${contractTemp}`;
      console.log("front isMain:", isMain);
      console.log("front user:", user);
      console.log("front contract:", contract);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/usercontract/add`, {
          isMain,
          user,
          contract,
        })
        .then((res) => {
          console.log("UserContract Created:", res);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      component="form"
      sx={{ width: 300, height: 400 }}
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <div>userContract Temp</div>
      <TextField
        id="ismain"
        type="number"
        margin="dense"
        variant="filled"
        label="is main? 0/1"
        value={isMainTemp}
        onChange={(event) => setIsMainTemp(event.target.value)}
      />
      <TextField
        id="user"
        type="number"
        margin="dense"
        variant="filled"
        label="user id"
        value={userTemp}
        onChange={(event) => setUserTemp(event.target.value)}
      />
      <br />
      <br />
      <TextField
        id="contract"
        type="number"
        margin="dense"
        variant="filled"
        label="n° Contrat"
        value={contractTemp}
        onChange={(event) => setContractTemp(event.target.value)}
      />
      <br />
      <input type="submit" value="Envoyer" onSubmit={handleSubmit} />
      {/* </form> */}
    </Box>
  );
}
