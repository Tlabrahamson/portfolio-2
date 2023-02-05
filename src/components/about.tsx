import React from 'react'

export default function About() {
    let currentYear = new Date().getFullYear();
    let webDevStartDate = currentYear - 2020;

  return (
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
  )
}
