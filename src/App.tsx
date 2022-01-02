import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/Main/Main.container';
import HeaderContainer from './components/Header/Header.Container';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}

export default App;
