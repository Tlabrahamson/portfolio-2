import React from 'react'


export default function ProjectCard({...props}) {
    const {projectCardTitle, projectCardImage, projectCardImageAlt, projectCardDescription, projectCardLink} = props;

  return (
    <a className='project-card-container' href={projectCardLink} target='_blank' rel="noreferrer">
        <img className='card-image' src={projectCardImage} alt={projectCardImageAlt} width='1920' height='1080'/>
        <h4 className='small-heading'>{projectCardTitle}</h4>
        <p>{projectCardDescription}</p>
        {/* <a href={projectCardLink} target='_blank' rel="noreferrer">Live Site</a> */}
    </a>
  )
}
