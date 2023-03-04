import React from 'react';
import ProjectCard from './ProjectCard'

export default function Projects() {

  return (
    <div className='projects-background'>
        <div className='projects-container'>
            <div className='projects-section'>
                <div>
                    <h3 className='large-heading'>Projects<span>:</span></h3>
                    <p className='no-container-text'>
                        Here are some projects I created before working full-time as a dev:
                    </p>
                </div>

                <div className="projects-grid">
                    {/* Employ. The backend no longer works because Heroku deleted all free accounts! Wot? */}
                    <ProjectCard 
                        projectCardTitle="Employ." 
                        projectCardImage="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1676005845/Portfolio/employ_hzf2wu.webp" 
                        projectCardImageAlt="The Employ. Project" 
                        projectCardDescription="Employ. is a fullstack job listing/job seeking website. It's built with React as frontend and node as a 
                        backend. I used MongoDB Atlas as the database."
                        projectCardLink="https://jobs-employ.netlify.app/"
                    />
                    {/* Cocktail Roulette */}
                    <ProjectCard 
                        projectCardTitle="Cocktail Roulette" 
                        projectCardImage="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1673474335/Portfolio/cocktail-roulette_vfxhdy.webp" 
                        projectCardImageAlt="The Cocktail Roulette Project" 
                        projectCardDescription="Cocktail Roulette is a random cocktail generator. It uses the API from www.thecocktaildb.com to fetch 
                        a random cocktail with an image, ingredients, recommended glass, etc."
                        projectCardLink="https://cocktail-roulette.netlify.app/"
                    />
                    {/* Alphabetty */}
                    <ProjectCard 
                        projectCardTitle="Alphabetty" 
                        projectCardImage="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1673473752/Portfolio/alphabetty_wywv4e.webp" 
                        projectCardImageAlt="The Alphabetty Project" 
                        projectCardDescription="Alphabetty is an app I made for my kids when they were younger and beginning to learn the alphabet. It has a fixed scroll and 
                        uses SVG to draw out each letter."
                        projectCardLink="https://alphabetty.netlify.app/"
                    />
                    {/* Synth. */}
                    <ProjectCard 
                        projectCardTitle="Synth." 
                        projectCardImage="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1673473752/Portfolio/synth_huejza.webp" 
                        projectCardImageAlt="The Synth. Project" 
                        projectCardDescription="Synth. is a colorful website I built using a synthwave color scheme. I dig the aesthetic."
                        projectCardLink="https://synth-wav.netlify.app/"
                    />
                    {/* Dodeca */}
                    <ProjectCard 
                        projectCardTitle="Dodeca" 
                        projectCardImage="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1673473752/Portfolio/dodeca_xehwd4.webp" 
                        projectCardImageAlt="The Dodeca Project" 
                        projectCardDescription="Dodcea is a website that I designed with Figma. I was going through a phase where I enjoyed designing landing pages
                        and building them out."
                        projectCardLink="https://dodeca.netlify.app/"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
