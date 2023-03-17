import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Design from './components/design';
import OutOfContent from './components/outOfContent';
import Footer from './components/footer';
import './style.css';

function App() {

  // Things to add:
  // 1. In the Out of Content section, add one or two more options for novelty sake
  // 2. Do something about the logo/text.
  // 3. More color themes :P

  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || '');

  const changeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    const storedValue = localStorage.getItem('theme');
    if (storedValue) {
      setTheme(storedValue)
    }
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <Helmet>
        <title>Tim Abrahamson | Software Developer</title>
        <meta name="description" content="Hello, I'm Tim Abrahamson. I'm a software developer based out of Birmingham, AL" />
        <meta name="keywords" content="Tim Abrahamson" />
      </Helmet>
      <select onChange={changeTheme} value={theme} className='theme-select'>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="pastel">Pastel</option>
        <option value="cyber">Cyber</option>
        <option value="greens">Greens</option>
        <option value="mcdonalds">McDonalds (Cursed)</option>
      </select>
      <div className='theme-color-container'>
        <div className='theme-color-primary'></div>
        <div className='theme-color-secondary'></div>
        <div className='theme-color-background'></div>
        <div className='theme-color-white'></div>
        <div className='theme-color-about'></div>
        <div className='theme-color-design'></div>
      </div>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Timeline/>
        <Projects/>
        <Design />
        <OutOfContent />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
