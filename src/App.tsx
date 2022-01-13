import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import CoinInfoContainer from './components/CoinInfo/CoinInfoContainer';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/:pageNumber" element={<MainContainer />} />
          <Route path="/coin/:coinId" element={<CoinInfoContainer />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
