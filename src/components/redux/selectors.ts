import { StateType } from './store';

export const mainCoinsSelector = (state: StateType) => state.main.coinsData;
export const headerCoinsSelector = (state: StateType) => state.header.coinsData;
