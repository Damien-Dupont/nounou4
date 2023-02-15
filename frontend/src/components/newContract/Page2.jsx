import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { Grid, Box, TextField, InputAdornment } from "@mui/material";

import "dayjs/locale/fr";

import {
  setPriceHour,
  setPriceOverHour,
  setPriceHousehold,
  setPriceLongHousehold,
  setPriceMeal,
  setPriceSnack,
  setPage,
} from "../../redux/formSlice";

import "./Contracts.scss";

export default function Page2() {
  const dispatch = useDispatch();

  const priceHour = useSelector((state) => state.form.priceHour);
  const priceOverHour = useSelector((state) => state.form.priceOverHour);
  const priceHousehold = useSelector((state) => state.form.priceHousehold);
  const priceLongHousehold = useSelector(
    (state) => state.form.priceLongHousehold
  );
  const priceMeal = useSelector((state) => state.form.priceMeal);
  const priceSnack = useSelector((state) => state.form.priceSnack);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>Parlons argent...</p>
      <Grid
        container
        direction="row"
        columnSpacing={0}
        rowSpacing={2}
        justifyContent="spaceAround"
        alignItems="center"
      >
        <Grid item xs={6}>
          <p>Prix de l'heure normale :</p>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceHour"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix de l'heure"
            value={priceHour}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/h</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceHour(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'heure
          <br />
          au-delà de 9h par jour :
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceOverHour"
            type="number"
            margin="dense"
            variant="filled"
            label="L'heure complémentaire"
            value={priceOverHour}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/h</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceOverHour(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'entretien :
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien"
            value={priceHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) =>
              dispatch(setPriceHousehold(event.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          Prix de l'entretien
          <br />
          au-delà de 9h par jour :
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceLongHousehold"
            type="number"
            margin="dense"
            variant="filled"
            label="Montant de l'entretien > 9h"
            value={priceLongHousehold}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) =>
              dispatch(setPriceLongHousehold(event.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          Prix du repas:
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceMeal"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du repas"
            value={priceMeal}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceMeal(event.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          Prix du goûter:
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="priceSnack"
            type="number"
            margin="dense"
            variant="filled"
            label="Prix du goûter"
            value={priceSnack}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€/J</InputAdornment>
              ),
            }}
            onChange={(event) => dispatch(setPriceSnack(event.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          {priceSnack > 0 &&
          priceMeal > 0 &&
          priceHour > 0 &&
          priceHousehold > 0 ? (
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
        </Grid>{" "}
      </Grid>
    </Box>
  );
}

export { Page2 };
