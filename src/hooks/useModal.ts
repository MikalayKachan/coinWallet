import { useState } from 'react';

export const useModal = ({ defaultOpen = false, defaultData = null }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [data, setData] = useState(defaultData);

  const openModal = (modalData: any) => {
    setOpen(true);

    if (modalData) {
      setData(modalData);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setData(defaultData);
  };

  return [open, openModal, closeModal, data];
};
