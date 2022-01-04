import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';

import Header from './Header';
import WalletModal from './components/WalletModal/WalletModal';
import {headerCoinsSelector} from "../redux/selectors"
import { setCoinsAC } from '../redux/headerReducer';


const HeaderContainer = () => {

    const dispatch =  useDispatch()
    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=3").then(response => {
            dispatch(setCoinsAC(response.data.data))
        })
    }, [])
       


    
    //const someData = localStorage.getItem(NAME_OF_DATA);
    //localStorage.setItem(NAME_OF_DATA, data);

const coins = useSelector(headerCoinsSelector)

    const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
    return (
        <>
            <Header openModal={openModal} coins={coins} />
            <WalletModal open={modalOpen} onClose={closeModal} />
        </>
    );
};

export default React.memo (HeaderContainer)

