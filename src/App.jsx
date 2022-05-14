import {
  Button,
  Container,
  Fab,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              minWidth: "280px",
              margin: "auto",
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h5">count</Typography>
            <Typography variant="h1">{count}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2}>
            <Fab
              color="primary"
              aria-label="add"
              size="medium"
              onClick={() => dispatch(increment(Number(amount)))}
            >
              <AddIcon />
            </Fab>
            <TextField
              type="number"
              defaultValue={amount}
              size="small"
              sx={{ width: 100 }}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Fab
              color="primary"
              size="medium"
              aria-label="decrement"
              onClick={() => dispatch(decrement(Number(amount)))}
            >
              <RemoveIcon />
            </Fab>
          </Stack>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => dispatch(reset(Number(amount)))}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
