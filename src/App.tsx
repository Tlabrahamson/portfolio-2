import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Timeline from './components/timeline';
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
        <Timeline/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
