// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

