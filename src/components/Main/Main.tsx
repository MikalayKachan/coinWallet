import React from "react";
import styles from "./Main.module.css"
import Button from "../shared/Button/Button"
import { AppStateType } from "../redux/store"
import { NavLink } from 'react-router-dom';

type MainPropsType = {
    openModal: any
    state: AppStateType
    onNextClick: () => void
    onPrevClick: () => void
    /* currenPage: number */
    pageNumber: string | undefined
}


const Main = (props: MainPropsType) => {
    let coinItems = props.state.main.coinsData.map(coin =>
        <div className={styles.row}>
            <div>{coin.rank}</div>
            <div className={styles.main2}>
                <div>{coin.name}</div>
                <div>{coin.symbol}</div>
            </div>
            <div>{Number(coin.changePercent24Hr).toFixed(2)}%</div>
            <div>$ {coin.priceUsd ? Number(coin.priceUsd).toFixed(2) : ""}</div>
            <img src={"https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"} />
            <Button onClickHandler={props.openModal} />
        </div>
    )


    return (
        <div className={styles.main}>
            {coinItems}
            <div className={styles.pages}>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <NavLink to={`/${Number(props.pageNumber)> - 1}`}>
                        <button onClick={() => props.onPrevClick} type="button" className="btn btn-outline-light" >Previous</button>
                    </NavLink>
                    <div className={styles.pageNumber}>{props.pageNumber}</div>
                    <NavLink to={`/${Number(props.pageNumber) + 1}`}>
                        <button onClick={() => props.onNextClick} type="button" className="btn btn-outline-light">Next</button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Main