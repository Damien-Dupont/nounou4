import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import axios from "axios";

import {
  Box,
  TextField,
  Select,
  Switch,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

// import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  //   setUserId,
  //   setParentFirstname,
  //   setParentLastname,
  setKidList,
} from "../../redux/parentSlice";

import {
  setCaregiver,
  setStartingDate,
  setWeeksPerYear,
  setPage,
  setIsMain,
  setKidId,
} from "../../redux/formSlice";

import "./Contracts.scss";

function getKidList(parentId) {
  const dispatch = useDispatch();
  if (parentId !== undefined) {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kid/parent/${parentId}`)
      .then((response) => {
        dispatch(setKidList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default function Page1() {
  const dispatch = useDispatch();
  const weeksPerYear = useSelector((state) => state.form.weeksPerYear);
  const kidList = useSelector((state) => state.parent.kidList);
  const caregiver = useSelector((state) => state.form.caregiver);
  const kidId = useSelector((state) => state.form.kidId);
  const startingDate = useSelector((state) => state.form.startingDate);
  const isMain = useSelector((state) => state.form.isMain);
  const parentId = useSelector((state) => state.parent.userId);

  if (kidList === undefined) {
    getKidList(parentId);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isMain ? (
        <p>Commençons par quelques questions simples:</p>
      ) : (
        <p>Le contrat est prévu pour une garde occasionnelle</p>
      )}
      <p>Quel enfant voulez-vous confier en garde ?</p>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="kid-select-label">Sélectionner l'enfant</InputLabel>
        <Select
          size="small"
          margin="dense"
          variant="filled"
          width="100%"
          labelId="kid-select-label"
          id="kid-select"
          value={kidId}
          label="Enfant"
          onChange={(event) => dispatch(setKidId(event.target.value))}
        >
          {kidList.map((kid) => (
            <MenuItem key={kid.id} value={`${kid.id}`}>
              {kid.lastname} {kid.firstname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <p>Comment se nomme l'assistant(e) maternel(le) ?</p>
        <TextField
          sx={{ minWidth: 300 }}
          id="caregiver"
          label="Ma/Mon Nounou"
          margin="dense"
          variant="filled"
          size="small"
          value={caregiver}
          onChange={(event) => dispatch(setCaregiver(event.target.value))}
        />
      </div>
      <div>
        <p>Quand démarre le contrat ?</p>
        <DatePicker
          label="Date de début"
          value={startingDate}
          onChange={(event) => {
            dispatch(setStartingDate(event));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div>
        <p>Quelle est sa durée annuelle en semaines ?:</p>
        <TextField
          id="WeeksPerYear"
          type="number"
          margin="dense"
          variant="filled"
          label="Semaines par an"
          value={weeksPerYear}
          onChange={(event) => dispatch(setWeeksPerYear(event.target.value))}
        />
        <p>S'agit-il du contrat principal de votre enfant ?</p>
        <Switch
          // classes={switchStyles}
          checked={isMain}
          onChange={(e) => dispatch(setIsMain(e.target.checked))}
        />{" "}
        {isMain ? "Oui" : "Non"}
        <br />
        {kidId === null || weeksPerYear < 1 ? (
          <Button variant="contained" disabled>
            Continuer
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(setPage(1))}
          >
            continuer
          </Button>
        )}
        <Button
          variant="contained"
          type="submit"
          onClick={() => dispatch(setPage(1))}
        >
          continuer
        </Button>
      </div>
    </Box>
  );
}

export { Page1 };
