import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header2}>
                <div className={styles.coinPart}>
                    <div>BITCOIN</div>
                    <div>1 BTC = 47.352,10 USD</div>
                </div>

                <div className={styles.coinPart}>
                    <div>ETHEREUM</div>
                    <div>1 ETH = 3.749,44 USD</div>
                </div>

                <div className={styles.coinPart}>
                    <div>LITECOIN</div>
                    <div>1 LTC = 149,94 USD</div>
                </div>
            </div>
            
            <div className={styles.wallet}>
                <img src={"https://орфографика.рф/800/600/https/www.pikpng.com/pngl/b/382-3820152_business-law-sale-department-icon-clipart.png"} className={styles.bag} />
                <div>134,32 USD +2,38 (1,80 %)</div>
            </div>
        </div>
    )
}

export default Header