import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, SetInput] = useState("");
  const [result, SetResult] = useState("");
  const handleInputs = (value) => {
    SetInput((prev) => prev + value);
  };
  const calculateResult = () =>{
    try{
      const calResult = eval(input);
      SetResult(calResult)
    }catch{
      SetResult ("Error");
    }
  };
  const clearAll = () => {
    SetInput("");
    SetResult("");
  };

  return (
    <div>
      <h1>Calculator App</h1>
       <div className="calculator">
      <div className="calculator-screen">
        <div className="input">
          <p>{input}</p></div>
        <div className="result"> <p>{result}</p></div>
      </div>
      <div className="calculator-buttons">
        <div className="numbers-buttons">
        {/* Numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleInputs(num.toString())}>
            {num}
          </button>
        ))}
        </div>
        <div className="operators-buttons">
        {/* Operators */}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleInputs(op)}>
            {op}
          </button>
        ))}
        </div>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearAll}>C</button>
      </div>
    </div>
    </div>
  );
};

export default App;
