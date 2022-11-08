import React from 'react'

export default function About() {
    let currentYear = new Date().getFullYear();
    let webDevStartDate = currentYear - 2019;
    let frameworkStartDate = currentYear - 2020;
    let softwareStartDate = currentYear - 2021;

  return (
    <div className='about-container'>
        <div className='about-experience-container'>
            <h2 className='large-heading'>A bit About Myself</h2>
            <p>I'm a software developer based out of Birmingham, AL. </p>
            <p>I have <span>{webDevStartDate}</span> years experience with Web Development</p>
            <p>I have <span>{frameworkStartDate}</span> years experience with React</p>
            <p>I have <span>{softwareStartDate}</span> years experience as a Full Stack Software Developer</p>
        </div>
    </div>
  )
}
