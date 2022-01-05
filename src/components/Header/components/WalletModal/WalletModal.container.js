import  React, {useState, useEffect } from "react"
import axios from 'axios'

import WalletModal from "./WalletModal"


const WalletModalContainer = ({ open, onClose }) => {
    const walletCoin = JSON.parse(localStorage.getItem("myWallet"))
  
    const [walletData, setWalletData] = useState([]) 

    useEffect(()=>{
        if(walletCoin){

                const coinsIds = walletCoin.map(coin => coin.id).join(',') 

                axios.get(`https://api.coincap.io/v2/assets?ids=${coinsIds}`).then(response => {
                    const walletCurrency = response.data.data
                    const nextWallet = walletCoin.map(coin => ({...coin, usdCurrentValue: coin.value * walletCurrency.find(coinCurrency => coinCurrency.id ===coin.id).priceUsd }))
                    setWalletData(nextWallet)
                   })
           
        }
    }, [walletCoin])

    const handleDeleteClick = (walletId) => {
        const nextWalletData = walletData.filter(coin => coin.walletId !== walletId)
        localStorage.setItem("myWallet", JSON.stringify(nextWalletData))
        setWalletData(nextWalletData)
    }

    return (
        <WalletModal walletData={walletData} onDeleteClick={handleDeleteClick} open={open} onClose={onClose} />
    )
}

export default React.memo(WalletModalContainer)


