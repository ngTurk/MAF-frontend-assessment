import React from 'react';

import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

import './App.scss';

function App() {
  return (
    <div className="main-wrapper">
      <div className="container mx-auto">
        <Header />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
