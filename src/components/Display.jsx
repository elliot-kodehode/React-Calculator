/** @format */

import styles from "./display.module.css";
import Button from "./Button.jsx";
import { useState } from "react";

export default function Display({ currentCalc, result }) {
  return (
    <div className={styles.display}>
      <input
        type="text"
        className={styles.currentCalc}
        value={currentCalc}
        readOnly
      ></input>
      <input
        type="text"
        className={styles.currentResult}
        value={result}
        readOnly
      ></input>
    </div>
  );
}
