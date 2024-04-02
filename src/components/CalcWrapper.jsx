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
  const [currentNum, setCurrentNum] = useState(0);
  const operators = ["+", "-", "/", "=", "×"];

  const handleChange = (value) => {
    if (value === "RESET") {
      setCurrentCalc("");
      setResult(currentCalc);
    } else if (value === "DEL") {
      // Removes last character of the equation after trimming whitespace, and then trims whitespace after removing the character
      setCurrentCalc(currentCalc.trim().slice(0, -1).trim());
      //Checks if the last char is now a number or an operator and removes the current expected result if it is an operator
      operators.includes(currentCalc.trim().slice(0, -1))
        ? setResult(``)
        : setResult(evaluate(currentCalc.trim().slice(-1).trim()));
    } else {
      // Changes result to blank if an operator is added, and adds it with spacing to the calc
      if (
        operators.includes(value) &&
        !operators.includes(currentCalc.trim().slice(-1))
      ) {
        setCurrentCalc(currentCalc + " " + value + " ");
        setResult("");
      } else {
        setCurrentCalc(currentCalc + value);
        setResult(evaluate(currentCalc + value));
      }
    }
    // value === "RESET"
    //   ? (setCurrentCalc(``), setResult(currentCalc))
    //   : value === "DEL"
    //   ? (setCurrentCalc(currentCalc.trim().slice(0, -1).trim()), setResult(``))
    //   : // Changes result to blank if an operator is added, and adds it with spacing to the calc
    //   operators.includes(value) &&
    //     !operators.includes(currentCalc.trim().slice(0, -1))
    //   ? (setCurrentCalc(currentCalc + " " + value + " "), setResult(""))
    //   : (setCurrentCalc(currentCalc + value),
    //     setResult(evaluate(currentCalc + value)));

    // console.log(equation);
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
