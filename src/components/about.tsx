import React, { useState, useEffect } from 'react'
import axios from 'axios'

type Tab = "brief" | "detailed" | "fictional";

const tabs: Tab[] = ['brief', 'detailed', 'fictional'];

export default function About() {
  const [openAIResponse, setOpenAIResponse] = useState(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selected, setSelected] = useState<Tab>("detailed");

  let currentYear = new Date().getFullYear();
  let webDevStartDate = currentYear - 2020;
  
  const getFarfetchedStory = async () => {
    try {
      setVisible(false);
      // setLoading(true);
      const prompt = ['Once upon a time there was a guy named Tim Abrahamson.', 'In present day, there is a guy named Tim.', ];
      const modelEngine = 'text-davinci-002';
      // Get random number 0 - 1 for more randomness...I need more prompts.
      let randomPrompt = Math.floor(Math.random() * 2);
      
      const data = {
        prompt: prompt[randomPrompt],
        max_tokens: 2000,
        temperature: 0.6,
        stop: '\n'
      }

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`
      }

      const response = await axios.post(`https://api.openai.com/v1/engines/${modelEngine}/completions`, data, { headers });
      setTimeout(() => {
        setOpenAIResponse(response.data.choices[0].text.trim())
        setVisible(true);
        // setLoading(false);
      }, 400)

    } catch(err) {
      setError('It looks like Tim should look into the paid version of OpenAI...')
      // setLoading(false);
    }
  }

  const handleSetSelected = async (tab: Tab) => {
    setSelected(tab);
  }

  useEffect(() => {
    if (selected === 'fictional') {
      getFarfetchedStory()
    }
  }, [selected])
    

  return (
    <div className='about-background'>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg>
      <div className='about-container'>
          <div className='about-section'>
            <h3 className='large-heading'>About<span>:</span></h3>
            {tabs.map(tab => (
              <button
              key={tab}
              className={`about-tabs ${selected === tab ? 'selected' : ''}`}
              onClick={() => handleSetSelected(tab)}
              >
                {tab}
              </button>
            ))}
            {selected === 'brief' && <p>I'm a software developer based in Birmingham, AL with {webDevStartDate} years in professional experience.</p>}
            {selected === 'detailed' && <p>
              As a highly motivated software developer based in Birmingham, AL, I offer a unique blend of technical proficiency and an eye for design, 
              having honed my skills over the course of {webDevStartDate} years in various web development capacities, including internships, freelance work, 
              and full-time employment. My focus on frontend technologies, particularly React and JavaScript, has allowed me to bring a fresh and innovative 
              perspective to my work. I've demonstrated my ability to adapt and manage projects outside of my comfort zone, such as maintaining a scheduling 
              software that uses Django. Driven by a passion for the future of the web, I'm eager to take on new challenges 
              and continue my growth as a developer by exploring cutting-edge technologies.
            </p>}
            {selected === 'fictional' && <p className={`response-text ${visible ? 'show' : ''}`}>{openAIResponse}..or something like that.</p>}
            {error && <p>{error}</p>}
          </div>
      </div>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='second-wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector-two" fillRule="evenodd" clipRule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg>
    </div>
  )
}
