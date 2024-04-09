/** @format */

import Display from "./Display.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calc( currentTheme ) {
  const [currentCalc, setCurrentCalc] = useState(``);
  const [result, setResult] = useState(``);
  const operators = ["+", "-", "/", "*"];

  const handleChange = (value) => {
     
    if (value === "RESET") {
      setCurrentCalc("");
      setResult("");
      
    } else if (value === "DEL") {
      setCurrentCalc(currentCalc.slice(0, -1));
      // removes result if the equation ends on an operator or is empty
      if (operators.some(op => currentCalc.slice(0, -1).endsWith(op)) || currentCalc.slice(0, -1) === "") {
          setResult("")
      } else {setResult(evaluate(currentCalc.slice(0, -1)))}

    } else if (value === "=") {
      if (
        operators.some(op => currentCalc.endsWith(op))) {
        } else {
          setCurrentCalc("")
        }

    } else if ((currentCalc.includes(".") && value === ".")) {
      setCurrentCalc(currentCalc)
      setResult(result)

    // Changes result to blank if an operator is added, and adds operator/switches operator
    } else {
      if (operators.includes(value) && currentCalc !== "") {
        if (operators.some(op => currentCalc.endsWith(op))) {
          setCurrentCalc(currentCalc.slice(0, -1) + value)
        } else {
          setCurrentCalc(currentCalc + value);
          setResult("");
        }
      }

      // Adds number or operator if there isn't an operator before
      else {
          if (result !== "" && currentCalc === "") {
            if (operators.includes(value)) {
              setCurrentCalc(prevState => result + value)
            } else {
              setCurrentCalc(value)
              setResult(value)
            }
          } else {
                if (!operators.includes(value) || value === "-") {
                  setCurrentCalc(currentCalc + value);
                  setResult(evaluate(currentCalc + value))} 
                } 
      }
    }
};

  return (
    <>
      <Display
        currentCalc={currentCalc}
        result={result}
        data-theme={currentTheme}
        ></Display>
      <Button
        currentCalc={currentCalc}
        handleChange={handleChange}
        data-theme={currentTheme}
      ></Button>
    </>
  );
}
