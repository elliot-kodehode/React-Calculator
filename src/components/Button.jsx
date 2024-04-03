/** @format */

import styles from "./button.module.css";
import Display from "./Display.jsx";
import { useState } from "react";

export default function Button({ handleChange }) {
  const buttonsArray = [
    ["7", "8", "9", "DEL"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    [".", "0", "/", "*"],
    ["RESET", "="],
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsArray.flat().map((btn, i) => {
        return (
          <input
            type="button"
            key={i}
            className={
              btn === "="
                ? styles.equalsBtn
                : btn === "RESET"
                ? styles.resetBtn
                : btn === "DEL"
                ? styles.delBtn
                : styles.button
            }
            value={btn}
            onClick={() => handleChange(btn)}
          ></input>
        );
      })}
    </div>
  );
}
