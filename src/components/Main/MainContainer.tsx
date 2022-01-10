import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../hooks/useModal';

import { setCoinsForMainAC } from '../redux/mainReducer';
import { mainCoinsSelector } from '../redux/selectors';

import MainModalContainer from './components/MainModal/MainModal.container';
import Main from './Main';

const MainContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coins = useSelector(mainCoinsSelector);
  const { pageNumber } = useParams();

  const [modalOpen, openModal, closeModal, modalData] = useModal({
    defaultOpen: false,
  });

  const currentPage = Number(pageNumber);

  useEffect(() => {
    if (!pageNumber) {
      navigate('/1', { replace: true });
    }

    if (pageNumber) {
      axios
        .get(
          `https://api.coincap.io/v2/assets?limit=7&offset=${
            (currentPage - 1) * 7
          }`,
        )
        .then((response) => {
          dispatch(setCoinsForMainAC(response.data.data));
        })
        .catch((error) => console.log(error));
    }
  }, [pageNumber]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      navigate(`/${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    navigate(`/${currentPage + 1}`);
  };

  const handleCoinClick = (id: string | null) => {
    navigate(`/coin/${id}`);
  };

  const handleAddToWalletClick = (coinId: string | null) => {
    const coinInfo = coins.find(
      (coin: { id: string | null }) => coin.id === coinId,
    );

    //@ts-ignore
    openModal(coinInfo);
  };

  return (
    <>
      <Main
        currentPage={currentPage}
        coins={coins}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        onAddToWalletClick={handleAddToWalletClick}
        onCoinClick={handleCoinClick}
      />
      <MainModalContainer
        open={modalOpen}
        //@ts-ignore
        onClose={closeModal}
        modalData={modalData}
      />
    </>
  );
};

export default React.memo(MainContainer);
