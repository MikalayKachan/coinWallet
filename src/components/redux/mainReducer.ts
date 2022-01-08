import { CoinInfoType } from './headerReducer';

const SET_COINS_FOR_MAIN = 'SET_COINS_FOR_MAIN';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

type SetCoinsForMainActionType = {
  type: typeof SET_COINS_FOR_MAIN;
  coinsData: Array<CoinInfoType>;
};
type SetCurrentPageActoinType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export type MainStateType = {
  coinsData: Array<CoinInfoType>;
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
};

let initialMainState = {
  coinsData: [],
  currentPage: 1,
  pageSize: 5,
  isFetching: false,
};

type MainActionsTypes = SetCoinsForMainActionType | SetCurrentPageActoinType;

const mainReducer = (
  mainState: MainStateType = initialMainState,
  action: MainActionsTypes,
): MainStateType => {
  switch (action.type) {
    case SET_COINS_FOR_MAIN:
      return { ...mainState, coinsData: action.coinsData };
    case SET_CURRENT_PAGE:
      return { ...mainState, currentPage: action.currentPage };
    default:
      return mainState;
  }
};

export const setCoinsForMainAC = (coinsData: Array<CoinInfoType>) => ({
  type: SET_COINS_FOR_MAIN,
  coinsData: coinsData,
});
export const setCurrentPageAC = (
  currentPage: number,
): SetCurrentPageActoinType => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

export default mainReducer;
