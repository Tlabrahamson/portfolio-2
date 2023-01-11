import React from 'react'


export default function ProjectCard({...props}) {
    const {projectCardTitle, projectCardImage, projectCardImageAlt, projectCardDescription, projectCardLink} = props;

  return (
    <div className='project-card-container'>
        <h4>{projectCardTitle}</h4>
        <img src={projectCardImage} alt={projectCardImageAlt} />
        <p>{projectCardDescription}</p>
        <a href={projectCardLink} target='_blank' rel="noreferrer">Live Site</a>
    </div>
  )
}
