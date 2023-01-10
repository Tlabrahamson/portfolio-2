import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
