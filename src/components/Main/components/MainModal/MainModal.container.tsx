import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { CoinForMainContainerInfoType } from '../../MainContainer';

import MainModal from './MainModal';

type MainModalContainerPropsType = {
  open: boolean;
  onClose: () => void;
  modalData: CoinForMainContainerInfoType;
};

const MainModalContainer = ({
  open,
  onClose,
  modalData,
}: MainModalContainerPropsType) => {
  const [convertedValue, setConvertedValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const name = modalData ? modalData.name : null;
  const priceUsd = modalData ? modalData.priceUsd : null;
  const valueToRender = convertedValue.toFixed(2);

  const handleInputChange = (inputValue: number) => {
    const nextConvertedValue = inputValue * Number(priceUsd);

    setInputValue(inputValue);
    setConvertedValue(nextConvertedValue);
  };

  const handleConfirmClick = () => {
    const myWallet = localStorage.getItem('myWallet');

    if (myWallet) {
      if (convertedValue > 0) {
        const nextWallet = [
          ...JSON.parse(myWallet),
          {
            id: modalData.id,
            symbol: modalData.symbol,
            name: modalData.name,
            value: inputValue,
            usdValue: convertedValue,
            walletId: uuid(),
          },
        ];

        localStorage.setItem('myWallet', JSON.stringify(nextWallet));
      }
    }

    if (!myWallet) {
      const nextWallet = [
        {
          id: modalData.id,
          symbol: modalData.symbol,
          name: modalData.name,
          value: inputValue,
          usdValue: convertedValue,
          walletId: uuid(),
        },
      ];
      localStorage.setItem('myWallet', JSON.stringify(nextWallet));
    }

    onClose();
  };

  return (
    <MainModal
      open={open}
      value={valueToRender}
      name={name}
      onClose={onClose}
      onConfirmClick={handleConfirmClick}
      onInputChange={handleInputChange}
    />
  );
};

export default React.memo(MainModalContainer);
