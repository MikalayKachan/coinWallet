import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../hooks/useModal';

import { headerCoinsSelector } from '../redux/selectors';
import { setCoinsAC } from '../redux/headerReducer';

import Header from './Header';
import WalletModalContainer from './components/WalletModal/WalletModal.container';

type WalletCoinType = {
  id: string | null;
  name: string | null;
  symbol: string | null;
  usdValue: number | null;
  value: string | null;
  walletId: string | null;
};

export type UpdatedWalletCoinType = {
  id: string | null;
  name: string | null;
  symbol: string | null;
  usdValue: number | null;
  value: string | null;
  walletId: string | null;
  usdCurrentValue: number | null;
};

type WalletCurrencyType = {
  changePercent24Hr: string | null;
  explorer: string | null;
  id: string | null;
  marketCapUsd: string | null;
  maxSupply: null;
  name: string | null;
  priceUsd: number | null;
  rank: string | null;
  supply: string | null;
  symbol: string | null;
  volumeUsd24Hr: string | null;
  vwap24Hr: string | null;
};

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const coins = useSelector(headerCoinsSelector);

  const walletCoin: Array<WalletCoinType> = JSON.parse(
    localStorage.getItem('myWallet') || '[]',
  );

  const [myWallet, setMyWallet] = useState<
    Array<UpdatedWalletCoinType> | undefined
  >();
  const [myProfit, setMyProfit] = useState({
    initialValue: 0,
    currentValue: 0,
  });
  const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });

  useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets?limit=3').then((response) => {
      dispatch(setCoinsAC(response.data.data));
    });
  }, []);

  useEffect(() => {
    if (walletCoin) {
      const coinsIds = walletCoin.map((coin) => coin.id).join(',');

      axios
        .get(`https://api.coincap.io/v2/assets?ids=${coinsIds}`)
        .then((response) => {
          const walletCurrency: Array<WalletCurrencyType> = response.data.data;

          if (walletCurrency) {
            const nextWallet = walletCoin.map((coin) => ({
              ...coin,
              usdCurrentValue:
                Number(coin.value) *
                (walletCurrency.find(
                  (coinCurrency) => coinCurrency.id === coin.id,
                )?.priceUsd || 0),
            }));
            const nextInitialValue = nextWallet.reduce(
              (acc, coin) => acc + Number(coin.usdValue),
              0,
            );
            const nextCurrentValue = nextWallet.reduce(
              (acc, coin) => acc + coin.usdCurrentValue,
              0,
            );
            setMyProfit({
              initialValue: nextInitialValue,
              currentValue: nextCurrentValue,
            });
            setMyWallet(nextWallet);
          }
        });
    }
  }, [modalOpen]);

  return (
    <>
      <Header coins={coins} myProfit={myProfit} openModal={openModal} />
      <WalletModalContainer
        open={modalOpen}
        myWallet={myWallet}
        setMyWallet={setMyWallet}
        onClose={closeModal}
      />
    </>
  );
};

export default React.memo(HeaderContainer);
