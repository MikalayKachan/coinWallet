import React from "react";
import { NavLink } from 'react-router-dom'
import { CoinInfoType } from "../redux/headerReducer";
import { AppStateType } from "../redux/store"

import Button from "../shared/Button/Button"

import styles from "./Main.module.css"


type MainPropsType = {
    currentPage: number
    coins: Array<CoinInfoType>
    onNextClick: () => void
    onPrevClick: () => void
    onAddToWalletClick: (coinId: string | null) => void
    onCoinClick: (id: string | null) => void
}

const Main = ({ currentPage, coins, onNextClick, onPrevClick, onAddToWalletClick, onCoinClick }: MainPropsType) => {
    const coinItems = coins.map(coin => 
        <div key={coin.id} className={styles.row} onClick={()=>{onCoinClick(coin.id)}}>
            <div>{coin.rank}</div>
            <div className={styles.main2}>
                <div>{coin.name}</div>
                <div>{coin.symbol}</div>
            </div>
            <div>{Number(coin.changePercent24Hr).toFixed(2)}%</div>
            <div>$ {coin.priceUsd ? Number(coin.priceUsd).toFixed(2) : ""}</div>
            <img src={"https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"} />
            <Button onClick={(event: any) =>{
                event.stopPropagation()
                onAddToWalletClick(coin.id)}} />
        </div>
    )

    return (
        <div className={styles.main}>
            {coinItems}
            <div className={styles.pages}>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button onClick={onPrevClick} type="button" className="btn btn-outline-light" >Previous</button>
                    <div className={styles.pageNumber}>{currentPage}</div>
                    <button onClick={onNextClick} type="button" className="btn btn-outline-light">Next</button>
                </div>
            </div>

        </div>
    )
}

export default Main