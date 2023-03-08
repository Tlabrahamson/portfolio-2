import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});


export default function ProjectCard({...props}) {
    const {projectCardTitle, projectCardImage, projectCardImageAlt, projectCardDescription, projectCardLink} = props;

  return (
    <a data-aos="fade-up" data-aos-duration="500" className='project-card-container' href={projectCardLink} target='_blank' rel="noreferrer">
        <img className='card-image' src={projectCardImage} alt={projectCardImageAlt} width='1920' height='1080'/>
        <h4 className='small-heading'>{projectCardTitle}</h4>
        <p>{projectCardDescription}</p>
    </a>
  )
}
