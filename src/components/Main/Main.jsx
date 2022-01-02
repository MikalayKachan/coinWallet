import React from "react";
import styles from "./Main.module.css"


const Main = ({openModal}) => {
    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div className={styles.main2}>
                    <img src={"https://cdn.worldvectorlogo.com/logos/bitcoin.svg"} className={styles.logo} />
                    <div>bitcoin</div>
                </div>
                <div>47.352,10 USD</div>
                <div>+1.70%</div>
                <div>-6.50%</div>
                <img src={"https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"} />
                <button onClick={openModal} className={styles.button}>Add to wallet</button>
            </div>

            <div className={styles.row}>
                <div className={styles.main2}>
                    <img src={"https://cdn.worldvectorlogo.com/logos/ethereum-1.svg"} className={styles.logo} />
                    <div>ethereum</div>
                </div>
                <div>3.749,44 USD</div>
                <div>+0.69%</div>
                <div>-8.73%</div>
                <img src={"https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"} />
                <button onClick={openModal} className={styles.button}>Add to wallet</button>
            </div>
            <div className={styles.pages}>
                <div className={styles.page}>1</div>
                <div className={styles.page}>2</div>
                <div className={styles.page}>3</div>
            </div>
        </div>
    )
}

export default Main