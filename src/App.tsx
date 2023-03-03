import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import OutOfContent from './components/outOfContent';
import Footer from './components/footer';
import './style.css';

function App() {
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
      <select onChange={changeTheme} value={theme} className='theme-select'>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="pastel">Pastel</option>
        <option value="cyber">Cyber</option>
        <option value="greens">Greens</option>
        <option value="mcdonalds">McDonalds (Cursed)</option>
      </select>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Timeline/>
        <Projects/>
        <OutOfContent />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
