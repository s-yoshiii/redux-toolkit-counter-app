import {
  Button,
  Container,
  Fab,
  Grid,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";
import Granim from "react-granim";
import { styled } from "@mui/material/styles";
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
  },
});
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  return (
    <>
      <Granim
        stateTransitionSpeed={10000}
        direction={"left-right"}
        isPausedWhenNotInView={true}
        states={{
          "default-state": {
            gradients: [
              ["#E8F0F2", "#A2DBFA"],
              ["#39A2DB", "#053742"],
              ["#276678", "#1687A7"],
              ["#5A92AF", "#5A92AF"],
              ["#9CD9DE", "#D9F9F4"],
              ["#F98404", "#F7FD04"],
            ],
          },
        }}
      />
      <Container maxWidth="sm">
        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh", position: "relative" }}
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
            <Stack direction="row" spacing={4}>
              <Tooltip
                title={
                  amount === ""
                    ? `1づつ減算されます`
                    : `${amount}づつ減算されます`
                }
                arrow
                placement="top"
              >
                <Fab
                  color="primary"
                  size="medium"
                  aria-label="decrement"
                  onClick={() => dispatch(decrement(Number(amount)))}
                >
                  <RemoveIcon />
                </Fab>
              </Tooltip>
              <Tooltip
                title="入力した値ごとのカウントができます"
                arrow
                placement="top"
              >
                <CustomTextField
                  type="number"
                  variant="outlined"
                  defaultValue={amount}
                  size="small"
                  sx={{ width: 100 }}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Tooltip>
              <Tooltip
                title={
                  amount === ""
                    ? `1づつ加算されます`
                    : `${amount}づつ加算されます`
                }
                arrow
                placement="top"
              >
                <Fab
                  color="primary"
                  aria-label="add"
                  size="medium"
                  onClick={() => dispatch(increment(Number(amount)))}
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Stack>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(reset(Number(amount)))}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
