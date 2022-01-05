import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../hooks/useModal';

import { headerCoinsSelector } from "../redux/selectors"
import { setCoinsAC } from '../redux/headerReducer';

import Header from './Header';
import WalletModalContainer from './components/WalletModal/WalletModal.container';


const HeaderContainer = () => {

    const dispatch = useDispatch()
    const coins = useSelector(headerCoinsSelector)

    const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=3").then(response => {
            dispatch(setCoinsAC(response.data.data))
        })
    }, [])


 /*    const walletCoin = JSON.parse(localStorage.getItem("myWallet"))
    const totalCurrentlCount = 0


    if (walletCoin) {
        for (let i = 0; i <= walletCoin.length; i++) {
            totalCurrentlCount = totalCurrentlCount + walletCoin[i].usdCurrentValue
        }
    }

    console.log("totalCurrentlCount", totalCurrentlCount);
 */
    return (
        <>
            <Header openModal={openModal} coins={coins} />
            <WalletModalContainer open={modalOpen} onClose={closeModal} />
        </>
    );
};

export default React.memo(HeaderContainer)

