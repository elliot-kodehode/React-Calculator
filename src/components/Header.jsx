
import styles from "./header.module.css"

export default function Header ( { currentTheme, themeSelector }) {


    return (
        <div className={styles.header}>
            <h1>calc</h1>
            <div className={styles.themeWrapper}>
                <h2>THEME</h2>
                <div className={styles.themeSelector}>
                    <div className={styles.themeList}>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className={styles.themeBtnWrapper} 
                    onClick={() => { themeSelector(currentTheme) }} 
                    style={
                        {justifyContent: currentTheme === 1 ? "start" : currentTheme === 2 ? "center" : "end"}
                        }>
                        <div className={styles.themeBtn}></div>
                </div>
                </div>
            </div>
        </div>
    )
}