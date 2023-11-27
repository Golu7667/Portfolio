import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import {Projects }from './components/Project/Projects.js'
import Contact from './components/Contact';


function App() {
  return (
    < div >

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
    
 
    </div>
  );
}

export default App;
