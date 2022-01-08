import React from 'react';

import Modal from '../../../shared/Modal/Modal';

import styles from './WalletModal.module.css';

const WalletModal = ({ open, myWallet, onClose, onDeleteClick }) => {
  const index =
    myWallet &&
    myWallet.map((coin, index) => (
      <div key={coin.walletId} className={styles.main}>
        {index + 1}
      </div>
    ));
  const name =
    myWallet &&
    myWallet.map((coin) => (
      <div key={coin.walletId} className={styles.main}>
        {coin.name}
      </div>
    ));
  const symbol =
    myWallet &&
    myWallet.map((coin) => (
      <div key={coin.walletId} className={styles.main}>
        {coin.symbol}
      </div>
    ));
  const value =
    myWallet &&
    myWallet.map((coin) => (
      <div key={coin.walletId} className={styles.main}>
        {coin.value}
      </div>
    ));
  const usdCurrentValue =
    myWallet &&
    myWallet.map((coin) => (
      <div key={coin.walletId} className={styles.main}>
        {coin.usdCurrentValue.toFixed(2)}
      </div>
    ));
  const button =
    myWallet &&
    myWallet.map((coin) => (
      <div key={coin.walletId} className={styles.main}>
        <button
          onClick={() => onDeleteClick(coin.walletId)}
          className={styles.basketButton}
        >
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Linearicons_trash.svg/1024px-Linearicons_trash.svg.png'
            }
            className={styles.basket}
          />
        </button>
      </div>
    ));

  return (
    <Modal className={styles.testStyle} open={open} onClose={onClose}>
      <div className={styles.coinPart}>
        <div className={styles.number}>
          <div>№</div>
          <div>{index}</div>
        </div>
        <div className={styles.number}>
          <div>name</div>
          <div>{name}</div>
        </div>
        <div className={styles.number}>
          <div>symbol</div>
          <div>{symbol}</div>
        </div>
        <div className={styles.number}>
          <div>volume</div>
          <div>{value}</div>
        </div>
        <div className={styles.number}>
          <div>USD</div>
          <div>{usdCurrentValue}</div>
        </div>
        <div className={styles.number}>
          <div>delete</div>
          <div>{button}</div>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(WalletModal);
