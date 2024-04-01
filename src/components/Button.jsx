import styles from "./button.module.css"


export default function Button() {
    return (
        <div className={styles.buttonsContainer}>
                <input type="button" value="7" className={styles.button}></input>
                <input type="button" value="8" className={styles.button}></input>
                <input type="button" value="9" className={styles.button}></input>
                <input type="button" value="DEL" className={styles.delBtn}></input>

                <input type="button" value="4" className={styles.button}></input>
                <input type="button" value="5" className={styles.button}></input>
                <input type="button" value="6" className={styles.button}></input>
                <input type="button" value="+" className={styles.button}></input>

                <input type="button" value="1" className={styles.button}></input>
                <input type="button" value="2" className={styles.button}></input>
                <input type="button" value="3" className={styles.button}></input>
                <input type="button" value="-" className={styles.button}></input>

                <input type="button" value="." className={styles.button}></input>
                <input type="button" value="0" className={styles.button}></input>
                <input type="button" value="/" className={styles.button}></input>
                <input type="button" value="x" className={styles.button}></input>

                <input type="button" value="RESET" className={styles.resetBtn}></input>
                <input type="button" value="=" className={styles.equalsBtn}></input>
        </div>
    )
}