import React, { useEffect, useState } from 'react';
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
  // 1. Add some tabs to the about section that allow you to select a short, medium, lengthy, or an exagerated story by chatGPT
  // 2. Customize select for the theme selector that doesn't look bad
  // 3. Upload designs to Cloudinary and serve them optimized
  // 4. Add some animations to the timeline content as well as some of the other bits
  // 5. In the Out of Content section, add one or two more options for novelty sake
  // 6. Custom cursor?
  // 7. Do something about the logo/text.
  // 8. More color themes :P

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
        <Design />
        <OutOfContent />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
