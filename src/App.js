import React from 'react';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills'; 
import Tools from './components/Tools';
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Tools/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
