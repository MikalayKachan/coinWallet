import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Route path="/:pageNumber?" render={() => <MainContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
