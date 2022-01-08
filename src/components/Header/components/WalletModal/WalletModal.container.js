import React from 'react';

import WalletModal from './WalletModal';

const WalletModalContainer = ({ open, myWallet, onClose, setMyWallet }) => {
  const handleDeleteClick = (walletId) => {
    const nextWalletData = myWallet.filter(
      (coin) => coin.walletId !== walletId,
    );
    localStorage.setItem('myWallet', JSON.stringify(nextWalletData));
    setMyWallet(nextWalletData);
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
