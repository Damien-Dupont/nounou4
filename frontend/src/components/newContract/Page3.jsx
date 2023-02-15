import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { Grid, Box, TextField, Switch } from "@mui/material";

import "dayjs/locale/fr";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import {
  setMondayStart,
  setMondayEnd,
  setTuesdayStart,
  setTuesdayEnd,
  setWednesdayStart,
  setWednesdayEnd,
  setThursdayStart,
  setThursdayEnd,
  setFridayStart,
  setFridayEnd,
  setMondayCare,
  setTuesdayCare,
  setWednesdayCare,
  setThursdayCare,
  setFridayCare,
  setPage,
} from "../../redux/formSlice";

import "./Contracts.scss";

export default function Page3() {
  const dispatch = useDispatch();

  const mondayCare = useSelector((state) => state.form.mondayCare);
  const tuesdayCare = useSelector((state) => state.form.tuesdayCare);
  const wednesdayCare = useSelector((state) => state.form.wednesdayCare);
  const thursdayCare = useSelector((state) => state.form.thursdayCare);
  const fridayCare = useSelector((state) => state.form.fridayCare);
  const mondayStart = useSelector((state) => state.form.mondayStart);
  const mondayEnd = useSelector((state) => state.form.mondayEnd);
  const tuesdayStart = useSelector((state) => state.form.tuesdayStart);
  const tuesdayEnd = useSelector((state) => state.form.tuesdayEnd);
  const wednesdayStart = useSelector((state) => state.form.wednesdayStart);
  const wednesdayEnd = useSelector((state) => state.form.wednesdayEnd);
  const thursdayStart = useSelector((state) => state.form.thursdayStart);
  const thursdayEnd = useSelector((state) => state.form.thursdayEnd);
  const fridayStart = useSelector((state) => state.form.fridayStart);
  const fridayEnd = useSelector((state) => state.form.fridayEnd);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>Pour finir, parlons horaires...</p>
      <p>Sélectionnez les jours de garde, puis les horaires</p>
      <Grid
        container
        direction="row"
        columnSpacing={0}
        rowSpacing={0}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={4}>
          {mondayCare && (
            <TimePicker
              label="Lundi débute à..."
              value={mondayStart}
              onChange={(newValue) => {
                dispatch(setMondayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Lundi
            <Switch
              // classes={switchStyles}
              checked={mondayCare}
              onChange={(e) => dispatch(setMondayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {mondayCare && (
            <TimePicker
              label="Lundi termine à..."
              value={mondayEnd}
              onChange={(newValue) => {
                dispatch(setMondayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {tuesdayCare && (
            <TimePicker
              label="Mardi débute à..."
              value={tuesdayStart}
              onChange={(newValue) => {
                dispatch(setTuesdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Mardi
            <Switch
              // classes={switchStyles}
              checked={tuesdayCare}
              onChange={(e) => dispatch(setTuesdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {tuesdayCare && (
            <TimePicker
              label="Mardi termine à..."
              value={tuesdayEnd}
              onChange={(newValue) => {
                dispatch(setTuesdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {wednesdayCare && (
            <TimePicker
              label="Mercredi débute à..."
              value={wednesdayStart}
              onChange={(newValue) => {
                dispatch(setWednesdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Mercredi
            <Switch
              // classes={switchStyles}
              checked={wednesdayCare}
              onChange={(e) => dispatch(setWednesdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {wednesdayCare && (
            <TimePicker
              label="Mercredi termine à..."
              value={wednesdayEnd}
              onChange={(newValue) => {
                dispatch(setWednesdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {thursdayCare && (
            <TimePicker
              label="Jeudi débute à..."
              value={thursdayStart}
              onChange={(newValue) => {
                dispatch(setThursdayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Jeudi
            <Switch
              // classes={switchStyles}
              checked={thursdayCare}
              onChange={(e) => dispatch(setThursdayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {thursdayCare && (
            <TimePicker
              label="Jeudi termine à..."
              value={thursdayEnd}
              onChange={(newValue) => {
                dispatch(setThursdayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>{" "}
        <Grid item xs={4}>
          {fridayCare && (
            <TimePicker
              label="Vendredi débute à..."
              value={fridayStart}
              onChange={(newValue) => {
                dispatch(setFridayStart(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <p>
            Vendredi
            <Switch
              // classes={switchStyles}
              checked={fridayCare}
              onChange={(e) => dispatch(setFridayCare(e.target.checked))}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          {fridayCare && (
            <TimePicker
              label="Vendredi termine à..."
              value={fridayEnd}
              onChange={(newValue) => {
                dispatch(setFridayEnd(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {mondayCare === false &&
          tuesdayCare === false &&
          wednesdayCare === false &&
          thursdayCare === false &&
          fridayCare === false ? (
            <Button variant="contained" disabled>
              Enregistrer
            </Button>
          ) : (
            <Button
              variant="contained"
              type="submit"
              onClick={() => dispatch(setPage(1))}
            >
              Enregistrer
            </Button>
          )}
        </Grid>{" "}
      </Grid>
    </Box>
  );
}

export { Page3 };
