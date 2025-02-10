import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [year, setYear] = useState(0);
  const [rate, setRate] = useState(0);
  const [interest, setInterest] = useState(0);

  // Calculate simple interest
  const calculate = () => {
    const output = (amount * year * rate) / 100;
    setInterest(output);
  };

  // Reset the values
  const reset = () => {
    setAmount(0);
    setRate(0);
    setYear(0);
    setInterest(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us</p>
        </div>

        <div className="total">
          <h2>&#8377;{interest}</h2>
          <p>Your Total Interest</p>
        </div>

        <div className="form">
          <form className="input">
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              value={amount || ""}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Year"
              variant="filled"
              value={year || ""}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Rate"
              variant="standard"
              value={rate || ""}
              onChange={(e) => setRate(e.target.value)}
              fullWidth
            />
          </form>
        </div>

        <div className="button">
          <Button variant="text" onClick={reset}>
            Reset
          </Button>
          <Button variant="contained" onClick={calculate}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
