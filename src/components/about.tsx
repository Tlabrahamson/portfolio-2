import React from 'react'

export default function About() {
    let currentYear = new Date().getFullYear();
    let webDevStartDate = currentYear - 2019;
    let frameworkStartDate = currentYear - 2020;
    let softwareStartDate = currentYear - 2021;

  return (
    <div className='about-container'>
        <div className='about-section'>
          <h3 className='large-heading'>About<span>:</span></h3>
          <p>
            I'm a software developer based in Birmingham, AL. Between internships, freelance work, and full-time employment, I've been a web developer for <span>{webDevStartDate} years</span>. I've always dabbled in 
            design, so I made it my focus to learn frontend technologies. I've been working with React and other JavaScript frameworks for <span>{frameworkStartDate} years</span> now. At my current role, I've 
            been working with Python and Django in unison with frontend technologies for <span>{softwareStartDate} years</span>. I'm excited for the future of the web and look forward 
            to learning more cool tech.
          </p>
        </div>
    </div>
  )
}
