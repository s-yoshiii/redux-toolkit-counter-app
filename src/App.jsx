import { Button, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => dispatch(increment(Number(amount)))}
      >
        <AddIcon />
      </Fab>
      <TextField
        type="number"
        helperText="数字を入力してください"
        defaultValue={amount}
        size="small"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Fab
        color="primary"
        aria-label="decrement"
        onClick={() => dispatch(decrement(Number(amount)))}
      >
        <RemoveIcon />
      </Fab>
      <Button
        variant="contained"
        onClick={() => dispatch(reset(Number(amount)))}
      >
        Reset
      </Button>
    </div>
  );
}

export default App;
