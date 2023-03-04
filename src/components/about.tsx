import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

type Tab = "brief" | "detailed" | "fictional";

const tabs: Tab[] = ['brief', 'detailed', 'fictional'];

export default function About() {
  // const [briefAboutMe, setBriefAboutMe] = useState('');
  // const [moreAboutMe, setMoreAboutMe] = useState('');
  // const [openAIResponse, setOpenAIResponse] = useState<null>(null);
  const openAIResponseRef = useRef(null);
  const [error, setError] = useState<string>('');
  const [selected, setSelected] = useState<Tab>("detailed");
  
  
  // console.log('The secret is:', process.env.TEST_VAR)

  let currentYear = new Date().getFullYear();
  let webDevStartDate = currentYear - 2020;

  
  

  const handleSetSelected = async (tab: Tab) => {
    setSelected(tab);
  }

  useEffect(() => {
    if (selected === 'fictional') {
      const getFarfetchedStory = async () => {
        try {
          const prompt = "Generate a short horror story about a person who moves into a new house only to discover that it is haunted.";
          
          const data = {
            "prompt": prompt,
            "max_tokens": 2048,
            "n": 1
          }
  
          const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`
          }
  
          const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", data, { headers });
          openAIResponseRef.current = response.data.choices[0].text.trim()
        } catch(err) {
          setError('It looks like Tim should look into the paid version of OpenAI...')
        }
      }
  
      getFarfetchedStory();
    }

    console.log(openAIResponseRef.current)
  }, [selected, openAIResponseRef]);


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
            {selected === 'fictional' && <p>{error ? error : 'This is a work in progress...'}</p>}
            {/* {selected === 'fictional' && <p>{openAIResponseRef.current ? openAIResponseRef.current : error}</p>} */}
          </div>
      </div>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='second-wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector-two" fillRule="evenodd" clipRule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg>
    </div>
  )
}
