import React from 'react';
import { useModal } from '../../hooks/useModal';
import Main from './Main';
import MainModal from './components/TestModal/MainModal';

const MainContainer = () => {
  const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
  return (
    <>
      <Main openModal={openModal} />
      <MainModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default React.memo(MainContainer);