import React from 'react'
import styles from './Header.module.css'
import { AppStateType } from "../redux/store"
import { CoinInfoType } from '../redux/headerReducer'

type HeaderPropsType = {
    openModal: any,
    coins: Array<CoinInfoType>
}

const Header = ({openModal, coins}: HeaderPropsType) => {
    let coinItems = coins.map(coin =>
        <div key={coin.id} className={styles.coinPart}>
            <div>{coin.name}</div>
            <div>1 {coin.symbol} = {coin.priceUsd ? Number(coin.priceUsd).toFixed(5) : ""} USD</div>
        </div>)
    return (

        <div className={styles.header}>
            <div className={styles.header2}>
                {coinItems}
            </div>

            <div className={styles.wallet}>
                <img onClick={openModal} src={"https://орфографика.рф/800/600/https/www.pikpng.com/pngl/b/382-3820152_business-law-sale-department-icon-clipart.png"} className={styles.bag} />
                <div>134,32 USD +2,38 (1,80 %)</div>
            </div>
        </div>
    )
}

export default Header