import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import './App.scss';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
          <Route exact path='/Wheres-Waldo/' element={<Home />} />
          <Route exact path='/game1' element={<Game1 />} />
          <Route exact path='/game2' element={<Game2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
