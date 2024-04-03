/** @format */

import Header from "./Header.jsx";
import Display from "./Display.jsx";
import Button from "./Button.jsx";
import { useEffect, useState } from "react";
import {
  atan2,
  chain,
  derivative,
  e,
  evaluate,
  log,
  pi,
  pow,
  round,
  sqrt,
} from "mathjs";

export default function Calc() {
  const [currentCalc, setCurrentCalc] = useState(``);
  const [result, setResult] = useState(``);
  const operators = ["+", "-", "/", "=", "×"];

  const handleChange = (value) => {
    
    if (value === "RESET") {
      setCurrentCalc("");
      setResult("");
      
    } else if (value === "DEL") {
      setCurrentCalc(currentCalc.slice(0, -1));
      if (operators.includes(currentCalc.charAt(currentCalc.length - 1))) {
        setResult("")
      } else {setResult(evaluate(currentCalc.slice(0, -1)))}
      // setResult(operators.includes(currentCalc.charAt(currentCalc.length)) ? `` : evaluate(currentCalc.slice(0, -1)));
      console.log(currentCalc.slice(0, -1));

    } else {
      // Changes result to blank if an operator is added, and adds it with spacing to the calc
      if (
        operators.includes(value) 
        // && !operators.includes(currentCalc.slice(-1)) 
        //to fix when i have space betweeen operators later
      ) {
        setCurrentCalc(currentCalc + value);
        setResult("");

      } else {
        setCurrentCalc(currentCalc + value);
        setResult(evaluate(currentCalc + value));
      }
    }
};

  return (
    <>
      <Header></Header>
      <Display
        currentCalc={currentCalc}
        result={result}
      ></Display>
      <Button
        currentCalc={currentCalc}
        handleChange={handleChange}
      ></Button>
    </>
  );
}
