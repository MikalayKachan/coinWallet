import React from 'react';
import styles from './CoinInfo.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DedaultOptionsType } from './CoinInfoContainer';

type DataType = {
  currencySymbol: string | null;
  id: string | null;
  rateUsd: string | null;
  symbol: string | null;
  type: string | null;
};

export type CoinInfoType = {
  data: DataType;
  timestamp: number;
};

type CoinInfoPropsType = {
  options?: DedaultOptionsType;
  coinInfo?: CoinInfoType;
};

const CoinInfo = ({ options, coinInfo }: CoinInfoPropsType) => {
  const symbol = coinInfo?.data ? coinInfo.data.symbol : '';
  const currencySymbol = coinInfo?.data ? coinInfo.data.currencySymbol : '';
  const rateUsd = coinInfo?.data
    ? Number(coinInfo.data.rateUsd).toFixed(2)
    : '';

  const time = coinInfo?.timestamp
    ? new Date(coinInfo.timestamp).toLocaleString()
    : '';

  return (
    <div className={styles.coinInfo}>
      <div className={styles.info}>
        <div>Today</div>
        <div>{time}</div>
        <div>{symbol}</div>
        <div>{currencySymbol}</div>
        <div>Price USD: {rateUsd}</div>
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        className={styles.chart}
      />
    </div>
  );
};

export default CoinInfo;
