import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProjectCard from './components/projectCard';
import Footer from './components/footer';
import './style.css';
// Maybe I should look into serving images from Cloudinary...
import Synth from './images/synth.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Hero/>
        <ProjectCard projectTitle='Synth.' projectImageUrl={Synth} projectDescription='Synth. was built purely for aesthetic. Cyberpunk style was popular at the time.' projectLink='https://synth-wav.netlify.app/' />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
