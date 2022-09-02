import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProjectCard from './components/projectCard';
import Footer from './components/footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Hero/>
        {/* <ProjectCard projectTitle='Project One' projectImageUrl='https://source.unsplash.com/random' projectDescription='This is a project card' projectLink='https://google.com' /> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
