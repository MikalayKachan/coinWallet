import React from 'react';

import { CoinInfoType } from '../redux/headerReducer';

import Button from '../shared/Button/Button';

import styles from './Main.module.css';

type MainPropsType = {
  currentPage: number;
  coins: Array<CoinInfoType>;
  onNextClick: () => void;
  onPrevClick: () => void;
  onAddToWalletClick: (coinId: string | null) => void;
  onCoinClick: (id: string | null) => void;
};

const Main = ({
  currentPage,
  coins,
  onNextClick,
  onPrevClick,
  onAddToWalletClick,
  onCoinClick,
}: MainPropsType) => {
  const coinItems = coins.map((coin) => (
    <div
      key={coin.id}
      className={styles.row}
      onClick={() => {
        onCoinClick(coin.id);
      }}
    >
      <div className={styles.element}>{coin.rank}</div>
      <div className={styles.nameAndSymbol}>
        <div>{coin.name}</div>
        <div>{coin.symbol}</div>
      </div>
      <div className={styles.element}>
        {Number(coin.changePercent24Hr).toFixed(2)}%
      </div>
      <div className={styles.element}>
        $ {coin.priceUsd ? Number(coin.priceUsd).toFixed(2) : ''}
      </div>
      <Button
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          onAddToWalletClick(coin.id);
        }}
      />
    </div>
  ));

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.element}>Rank</div>
        <div className={styles.name}>Name</div>
        <div className={styles.element}>Change 24h</div>
        <div className={styles.element}>Price USD</div>
        <div className={styles.push}>You can more</div>
      </div>
      {coinItems}
      <div className={styles.pages}>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            onClick={onPrevClick}
            type="button"
            className="btn btn-outline-light"
          >
            Previous
          </button>
          <div className={styles.pageNumber}>{currentPage}</div>
          <button
            onClick={onNextClick}
            type="button"
            className="btn btn-outline-light"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
