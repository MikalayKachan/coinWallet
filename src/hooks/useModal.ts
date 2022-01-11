import { useState } from 'react';
import { CoinForMainContainerInfoType } from '../components/Main/MainContainer';

type UseModalType = {
  open: boolean;
  openModal: (data?: CoinForMainContainerInfoType | undefined) => void;
  closeModal: () => void;
  data: CoinForMainContainerInfoType;
};

export const useModal = (): UseModalType => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<CoinForMainContainerInfoType>(
    {} as CoinForMainContainerInfoType,
  );

  const openModal = (modalData?: CoinForMainContainerInfoType | undefined) => {
    setOpen(true);

    if (modalData) {
      setData(modalData);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setData({} as CoinForMainContainerInfoType);
  };

  return { open, openModal, closeModal, data };
};
