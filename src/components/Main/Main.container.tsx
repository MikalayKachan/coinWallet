import React from 'react';
import { useModal } from '../../hooks/useModal';
import Main from './Main';
import TestModal from './components/TestModal/TestModal';

const MainContainer = () => {
  const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
  return (
    <>
      <Main openModal={openModal} />
      <TestModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default React.memo(MainContainer);