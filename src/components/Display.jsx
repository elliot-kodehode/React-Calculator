import styles from "./display.module.css"

export default function Display() {
    return (
        <div className={styles.display}>
            <p className={styles.currentCalc}></p>
            <p className={styles.currentResult}></p>
        </div>
    )
}