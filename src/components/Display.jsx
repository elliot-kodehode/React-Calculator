/** @format */

import styles from "./display.module.css";
import Button from "./Button.jsx";
import { useState } from "react";

export default function Display({ currentCalc, result }) {
  return (
    <div className={styles.display}>
      <h4
        className={styles.currentCalc}
      >{currentCalc}</h4>
      <h3
        className={styles.currentResult}
      >{result}</h3>
    </div>
  );
}
