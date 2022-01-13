import React from 'react';
import { UpdatedWalletCoinType } from '../../HeaderContainer';

import WalletModal from './WalletModal';

type WalletModalContainerPropsType = {
  open: boolean;
  myWallet: Array<UpdatedWalletCoinType> | undefined;
  onClose: () => void;
  setMyWallet: (nextWalletData: Array<UpdatedWalletCoinType>) => void;
};

const WalletModalContainer = ({
  open,
  myWallet,
  onClose,
  setMyWallet,
}: WalletModalContainerPropsType) => {
  const handleDeleteClick = (walletId: string | null) => {
    if (myWallet) {
      const nextWalletData: Array<UpdatedWalletCoinType> = myWallet.filter(
        (coin) => coin.walletId !== walletId,
      );
      localStorage.setItem('myWallet', JSON.stringify(nextWalletData));
      setMyWallet(nextWalletData);
    }
  };

  return (
    <WalletModal
      myWallet={myWallet}
      onDeleteClick={handleDeleteClick}
      open={open}
      onClose={onClose}
    />
  );
};

export default React.memo(WalletModalContainer);
