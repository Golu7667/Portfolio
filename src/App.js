import React from 'react';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    </>
  );
}

export default App;
