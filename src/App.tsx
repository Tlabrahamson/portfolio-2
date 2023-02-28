import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Footer from './components/footer';
import useLocalStorage from 'use-local-storage'
import './style.css';

function App() {
  const defaultdark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultdark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'  
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <button className='theme-select' onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light' } Theme
      </button>
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
