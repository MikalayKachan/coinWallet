import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../hooks/useModal';

import { setCoinsForMainAC } from '../redux/mainReducer';
import { mainCoinsSelector } from '../redux/selectors';

import MainModalContainer from './components/MainModal/MainModal.container';
import Main from './Main';

export type CoinForMainContainerInfoType = {
  changePercent24Hr: string | null;
  explorer: string | null;
  id: string | null;
  marketCapUsd: string | null;
  maxSupply: string | null;
  name: string | null;
  priceUsd: string | null;
  rank: string | null;
  supply: string | null;
  symbol: string | null;
  volumeUsd24Hr: string | null;
  vwap24Hr: string | null;
};

const MainContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coins = useSelector(mainCoinsSelector);
  const { pageNumber } = useParams();

  const { open, openModal, closeModal, data } = useModal();

  const currentPage = Number(pageNumber);

  useEffect(() => {
    if (!pageNumber) {
      navigate('/1', { replace: true });
    }

    if (pageNumber) {
      axios
        .get(
          `https://api.coincap.io/v2/assets?limit=7&offset=${
            (currentPage?? 1 - 1) * 7
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
    const coinInfo: CoinForMainContainerInfoType | undefined = coins.find(
      (coin: { id: string | null }) => coin.id === coinId,
    );

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
      <MainModalContainer open={open} onClose={closeModal} modalData={data} />
    </>
  );
};

export default React.memo(MainContainer);
