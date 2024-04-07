/** @format */

import Header from "./Header.jsx";
import Display from "./Display.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calc() {
  const [currentCalc, setCurrentCalc] = useState(``);
  const [result, setResult] = useState(``);
  const operators = ["+", "-", "/", "*"];

  const handleChange = (value) => {
    
    if (value === "RESET") {
      setCurrentCalc("");
      setResult("");
      
    } else if (value === "DEL") {
      setCurrentCalc(currentCalc.trim().slice(0, -1).trim());
      // removes result if the equation ends on an operator or is empty
      if (
        currentCalc.slice(0, -1).endsWith("+") || 
        currentCalc.slice(0, -1).endsWith("*") || 
        currentCalc.slice(0, -1).endsWith("-") || 
        currentCalc.slice(0, -1).endsWith("/") ||
        currentCalc.slice(0, -1).endsWith(" ") ||
        currentCalc.slice(0, -1) === ""
        ) {
          setResult("")
      } else {setResult(evaluate(currentCalc.slice(0, -1)))}

    } else if (value === "=") {
      if (
        currentCalc.endsWith("+") || 
        currentCalc.endsWith("*") || 
        currentCalc.endsWith("-") || 
        currentCalc.endsWith("/") ||
        currentCalc.endsWith(".")
        ) {
        } else {
          setCurrentCalc("")
          // setResult(result)
        }

    } else if (currentCalc.includes(".") && value === ".") {
      setCurrentCalc(currentCalc)
      setResult(result)

    } else {
      // Changes result to blank if an operator is added, and adds it with spacing to the calc
      if (operators.includes(value) && currentCalc !== "") {
        if (currentCalc.endsWith("+") || 
        currentCalc.endsWith("*") || 
        currentCalc.endsWith("-") || 
        currentCalc.endsWith("/") ||
        currentCalc.endsWith(".") 
        ) {
          // setCurrentCalc(currentCalc)
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
          setCurrentCalc(currentCalc + value);
          setResult(evaluate(currentCalc + value))} 
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
