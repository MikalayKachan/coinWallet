import { combineReducers, createStore } from 'redux';
import mainReducer from './mainReducer';
import headerReducer from './headerReducer';

export type AppStoreType = typeof store;

let rootReducer = combineReducers({
  header: headerReducer,
  main: mainReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);

let state = store.getState();

export type StateType = typeof state;
