import React, { useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import Header from './Header';
import WalletModal from './components/WalletModal/WalletModal';
import axios from 'axios';
import { setCoinsAC } from '../redux/headerReducer';
import { useDispatch, useSelector } from 'react-redux';
import {testSelector} from "../redux/selectors"


const HeaderContainer = () => {

    const dispatch =  useDispatch()
    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=3").then(response => {
            dispatch(setCoinsAC(response.data.data))
        })
    }, [])
       
const state = useSelector(testSelector)
console.log(state);


    const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
    return (
        <>
            <Header openModal={openModal} state={state} />
            <WalletModal open={modalOpen} onClose={closeModal} />
        </>
    );
};

export default React.memo (HeaderContainer)

