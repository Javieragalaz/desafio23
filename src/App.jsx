import { useState } from 'react';



import './App.css';

//librerias

import { BrowserRouter, Routes, Route } from 'react-router-dom';

 //vistas 
import Home from './views/Home';
import Pokemon from './views/Pokemon';

//componentes
import Navbar from './components/Navbar';


function App() {

 
  return (
  <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/pokemon' element = {<Pokemon />} />

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
