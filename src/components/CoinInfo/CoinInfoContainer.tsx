import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import CoinInfo, { CoinInfoType } from './CoinInfo';

export type DataToChartItemType = {
  priceUsd: string;
  time: string;
};

export type DedaultOptionsType = typeof defaultOptions | undefined;

const defaultOptions = {
  title: {
    text: 'Dynamics of the year',
    style: { color: '#62dbd5', fontSize: '18px' },
  },
  chart: {
    type: 'spline',
    backgroundColor: '#50504f',
    borderRadius: 7,
    tickWidth: 10,
    spacingbottom: 0,
    spacingtop: 0,
    spacingleft: 0,
    spacingright: 50,
    width: 700,
    height: 250,
  },
  marker: {
    color: '#62dbd5',
    width: 0.01,
  },
  xAxis: {
    categories: [] as Array<string>,
  },
  series: [
    {
      data: [] as Array<number>,
    },
  ],
};

const CoinInfoContainer = () => {
  const [options, setOptions] = useState<DedaultOptionsType>();
  const [coinInfo, setCoinInfo] = useState<CoinInfoType>();
  const { coinId } = useParams();

  useEffect(() => {
    if (coinId) {
      axios
        .get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
        .then((response) => {
          const data: Array<DataToChartItemType> = response.data.data;
          const dataToChart: Array<number> = data.map((e) =>
            Number(e.priceUsd),
          );
          const dataToX: Array<string> = data.map((e) =>
            new Date(e.time).toLocaleDateString(),
          );

          const optionsForGraph = {
            ...defaultOptions,
            xAxis: { categories: dataToX },
            series: [{ data: dataToChart }],
          };

          setOptions(optionsForGraph);
        })
        .catch((error) => console.log(error));

      axios
        .get(`https://api.coincap.io/v2/rates/${coinId}`)
        .then((response) => {
          const coinInfoFromResponse = response.data;
          setCoinInfo(coinInfoFromResponse);
        });
    }
  }, [coinId]);

  return <CoinInfo options={options} coinInfo={coinInfo} />;
};

export default React.memo(CoinInfoContainer);
