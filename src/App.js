import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <h1>count:{count}</h1>
    </div>
  );
}

export default App;
