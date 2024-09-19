import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react';

function App() {
   const[amount,setAmount]=useState(0)
   const[year,setYear]=useState(0)
   const[rate,setRate]=useState(0)
   const[interest,setInterest]=useState(0)
      
  //  calculate simple interest
   const calculate=(e)=>{
    const output=(amount*year*rate)/100;
    setInterest(output)
   }
    // reset the value
   const reset=(e)=>{
    setAmount(0)
    setRate(0)
     setYear(0)
     setInterest(0)
   }
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="header">
            <h1>Simple Interest Calculator</h1>
            <p>Calculate your simple interest with us</p>
          </div>
          <div className="total">
        <h2>&#8377;{interest}</h2>
            <p>Yout Total Interest</p>
          </div>
          <div className="form">
            <form className='input'>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)} />
              {/* typically used in an input field to update the component's state whenever the input value changes. */}
              <TextField id="filled-basic" label="Year" variant="filled" value={year||""} onChange={(e)=>setYear(e.target.value)} />
              <TextField id="standard-basic" label="Rate" variant="standard" value={rate||""} onChange={(e)=>setRate(e.target.value)} />
            </form>
          </div>
          <div className="button">
            <Button variant="text" onClick={e=>reset(e)}>Reset</Button>
            <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          </div>
        </div>

      </div>



    </>
  )
}

export default App
