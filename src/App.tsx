import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/Main/Main.container';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
