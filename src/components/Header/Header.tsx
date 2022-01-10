import React from 'react';
import styles from './Header.module.css';
import { CoinInfoType } from '../redux/headerReducer';

type MyProfitType = {
  initialValue: number;
  currentValue: number;
};

type HeaderPropsType = {
  coins: Array<CoinInfoType>;
  openModal: any;
  myProfit: MyProfitType;
};

const Header = ({ coins, myProfit, openModal }: HeaderPropsType) => {
  const delta = myProfit.currentValue - myProfit.initialValue;
  const percents = (delta / myProfit.currentValue) * 100;
  const coinItems = coins.map((coin) => (
    <div key={coin.id} className={styles.coinPart}>
      <div>{coin.name}</div>
      <div>
        1 {coin.symbol} ={' '}
        {coin.priceUsd ? Number(coin.priceUsd).toFixed(5) : ''} USD
      </div>
    </div>
  ));

  const arrowDown = 'https://img.icons8.com/ios-glyphs/344/fa314a/give-way.png';
  const arrowUp =
    'https://img.icons8.com/fluency-systems-regular/344/26e07f/triangle.png';

  return (
    <div className={styles.header}>
      <div className={styles.topCoinsInfo}>{coinItems}</div>

      <div className={styles.wallet}>
        <div className={styles.statistic}>
          <img
            onClick={openModal}
            src={
              'https://орфографика.рф/800/600/https/www.pikpng.com/pngl/b/382-3820152_business-law-sale-department-icon-clipart.png'
            }
            alt="bag"
            className={styles.bag}
          />

          <div className={styles.difference}>
            {delta !== 0 && (
              <img
                src={delta > 0 ? arrowUp : arrowDown}
                alt="progress"
                className={styles.arrowIcon}
              />
            )}
            <div>{Math.abs(delta).toFixed(2)}</div>
            <div className={styles.text}>USD</div>
          </div>
          <div className={styles.usdValue}>
            <div>{myProfit.initialValue.toFixed(2)}</div>
            <div className={styles.text}>USD</div>
          </div>
          <div className={styles.percents}>
            {Math.abs(percents).toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
