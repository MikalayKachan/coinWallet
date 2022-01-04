import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import CoinInfoContainer from './components/CoinInfo/CoinInfoContainer'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Route path="/:pageNumber?" exact={true} render={() => <MainContainer /> } />
        <Route path="/coin/:coinId?" exact={true} render={() => <CoinInfoContainer /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
