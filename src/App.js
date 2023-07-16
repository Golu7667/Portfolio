import React from 'react';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
    <Header/>
    <About/>
    </>
  );
}

export default App;
