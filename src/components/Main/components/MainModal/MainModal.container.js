import React, { useState } from 'react';
import MainModal from './MainModal';
import { useDispatch } from 'react-redux';


const MainModalContainer = ({ open, onClose, modalData }) => {

    //const dispatch = useDispatch()

    const [value, setValue] = useState(0)

    const name = modalData ? modalData.name : null
    const priceUsd = modalData ? modalData.priceUsd : null

    const handleInputChange = (inputValue) => {
        let result = inputValue * priceUsd
        setValue(result)
    } 
    const valueToRender = value.toFixed(2)


    const handleConfirmClick = () => {
       // dispatch()
    }

    const myWallet = {
        coins: [
            {
                name: ' bitcoin',
                value: 200,
                priceUsd: 12388,
            }
        ]
    }

    /* const testData = JSON.stringify(myWallet)

    console.log('1', myWallet)
    console.log('2', JSON.stringify(myWallet))
    console.log('3', JSON.parse(testData))

    console.log('test!!!!!', localStorage) */

    return <MainModal open={open} value={valueToRender} name={name} onClose={onClose} onConfirmClick={handleConfirmClick} onInputChange={handleInputChange} />
};

export default React.memo(MainModalContainer);
