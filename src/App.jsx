import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <TextField
        type="number"
        helperText="数字を入力してください"
        defaultValue={amount}
        size="small"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => dispatch(increment(Number(amount)))}
      >
        Add
      </Button>
      <Button
        variant="contained"
        startIcon={<RemoveIcon />}
        onClick={() => dispatch(decrement(Number(amount)))}
      >
        subtract
      </Button>
    </div>
  );
}

export default App;
