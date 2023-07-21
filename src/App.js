import React from 'react';
import Header from './components/Header';
import { Route, Routes, Router } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>

      <Header />
      <section id="#about">
      <About />
      </section>
      <section id="#skills">
      <Skills />
      </section>
      <section id="#tools">
      <Tools />
      </section>
      <section id="#projects">
      <Projects />
      </section>
      <section id="#contact">
      <Contact />
      </section>
   
 
    </>
  );
}

export default App;
