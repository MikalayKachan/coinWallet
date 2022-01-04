import React from "react"
import { useHistory } from "react-router-dom"
import CoinInfo from "./CoinInfo"

const CoinInfoContainer = () => {
    const history = useHistory()




    return (
        <CoinInfo/>
    )
}

export default React.memo(CoinInfoContainer)