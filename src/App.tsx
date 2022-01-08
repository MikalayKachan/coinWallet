import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import CoinInfoContainer from './components/CoinInfo/CoinInfoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/:pageNumber" element={<MainContainer />} />
          <Route path="/coin/:coinId" element={<CoinInfoContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
