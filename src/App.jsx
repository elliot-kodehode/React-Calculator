/** @format */
import styles from "./app.module.css"
import Calc from "./components/CalcWrapper.jsx";
import Header from "./components/Header.jsx"
import { useEffect, useState } from "react";

function App() {
  const [currentTheme, setTheme] = useState(1)
  const [currentThemeBtn, setThemeBtn] = useState(currentTheme)


  const themeSelector = (currentTheme) => {
    currentTheme === 1 ? setTheme(2) : currentTheme === 2 ? setTheme(3) : setTheme(1);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme.toString());
  }, [currentTheme]);


  return (
  <>
  <Header themeSelector={themeSelector} currentTheme={currentTheme} data-theme={currentTheme}/>
  <Calc currentTheme={currentTheme}/>
  </>
  )
}

export default App;
