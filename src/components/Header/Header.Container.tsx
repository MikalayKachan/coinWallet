import React from 'react';
import { useModal } from '../../hooks/useModal';
import Header from './Header';
import WalletModal from './components/WalletModal/WalletModal';

const HeaderContainer = () => {
  const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
  return (
    <>
      <Header openModal={openModal} />
      <WalletModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default React.memo(HeaderContainer);