import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);
  const [inputValue, setInputValue] = useState(""); 
  const [intervalId, setIntervalId] = useState(null); 

  const start = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    const newIntervalId = setInterval(() => {
      setSecond((prev) => {
        if (prev <= 1) { 
          clearInterval(newIntervalId);
          setIntervalId(null); 
          return "Time is out!";
        }
        return prev - 1;
      });
    }, 1000);

    setIntervalId(newIntervalId); 
    setInputValue(""); 
  };

  return (
    <>
    <div className="container">
    <h1 className="main__title">Timer</h1>
      <div className="wrapper">
        <input
          className="input__number"
          type="number"
          placeholder="Enter number:"
          value={inputValue} 
          onChange={(e) => {
            setInputValue(e.target.value); 
            setSecond(Number(e.target.value)); 
          }}
        />
        <Button start={start}></Button>
      </div>
      <h1 className="display">{second}</h1>
      </div>
    </>
  );
}

export default App;
