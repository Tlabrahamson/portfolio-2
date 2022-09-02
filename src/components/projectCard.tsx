import React from 'react'

interface ProjectCardProps {
    projectTitle: string;
    projectImageUrl: string;
    projectImageAlt?: string;
    projectDescription: string;
    projectLink?: string;
}

export default function projectCard({projectTitle, projectImageUrl, projectImageAlt, projectDescription, projectLink}: ProjectCardProps) {
  return (
    <div className='project-card'>
        <h3>{projectTitle}</h3>
        <img className='project-card-image' src={projectImageUrl} alt={projectImageAlt} />
        <div className='project-card-body'>
            <p>{projectDescription}</p>
            <a href={projectLink} target='_blank'>Link</a>
        </div>
    </div>
  )
}
