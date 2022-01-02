import { useState } from 'react';

export const useModal = ({ defaultOpen = false, defaultData = null }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [data, setData] = useState(defaultData); //пока не юзаю

  const openModal = (modalData: any) => {
    setOpen(true);

    if (modalData) {   //пока не юзаю
      setData(modalData);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setData(defaultData); //пока не юзаю
  };

  return [open, openModal, closeModal, data];
};