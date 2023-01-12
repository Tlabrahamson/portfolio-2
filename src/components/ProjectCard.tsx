import React from 'react'


export default function ProjectCard({...props}) {
    const {projectCardTitle, projectCardImage, projectCardImageAlt, projectCardDescription, projectCardLink} = props;

  return (
    <div className='project-card-container'>
        <h4 className='small-heading'>{projectCardTitle}</h4>
        <img className='card-image' src={projectCardImage} alt={projectCardImageAlt} />
        <p>{projectCardDescription}</p>
        <a href={projectCardLink} target='_blank' rel="noreferrer">Live Site</a>
    </div>
  )
}
