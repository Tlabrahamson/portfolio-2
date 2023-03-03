import React from 'react'

export default function About() {
    let currentYear = new Date().getFullYear();
    let webDevStartDate = currentYear - 2020;

  return (
    <div className='about-background'>
      {/* <svg width="4000" height="120" viewBox="0 0 4000 120" className='wave-border' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg> */}
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg>
      <div className='about-container'>
          <div className='about-section'>
            <h3 className='large-heading'>About<span>:</span></h3>
            <p>
              As a highly motivated software developer based in Birmingham, AL, I offer a unique blend of technical proficiency and an eye for design, 
              having honed my skills over the course of {webDevStartDate} years in various web development capacities, including internships, freelance work, 
              and full-time employment. My focus on frontend technologies, particularly React and JavaScript, has allowed me to bring a fresh and innovative 
              perspective to my work. I've demonstrated my ability to adapt and manage projects outside of my comfort zone, such as maintaining a scheduling 
              software that uses Django. Driven by a passion for the future of the web, I'm eager to take on new challenges 
              and continue my growth as a developer by exploring cutting-edge technologies.
            </p>
          </div>
      </div>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='second-wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector-two" fill-rule="evenodd" clip-rule="evenodd" d="M0 68.5714L107.2 51.4286C212.8 34.2857 427.2 -3.33786e-06 640 2.85714C852.8 5.71428 1067.2 45.7143 1280 51.4286C1492.8 57.1429 1707.2 28.5714 1812.8 14.2857L1920 0V120H1812.8C1707.2 120 1492.8 120 1280 120C1067.2 120 852.8 120 640 120C427.2 120 212.8 120 107.2 120H0V68.5714Z" fill="#112D4E"/>
      </svg>
    </div>
  )
}
