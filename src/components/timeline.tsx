import React from 'react'


export default function Timeline({...props}) {

  return (
      <div className='timeline-section'>
        <div className='timeline'>
            <div className='timeline-container left'>
                <div className="timeline-content">
                    <h4>2008</h4>
                    <p>
                        A Java course in high school sparked my interest in coding.
                    </p>
                </div>
            </div>

            <div className='timeline-container right'>
                <div className="timeline-content">
                    <h4>2019</h4>
                    <p>
                        I set my sights on turning coding into a career. I joined a fullstack coding bootcamp at my local community college. Towards the end of the bootcamp, I was hired as an intern at Kinetic Communications. I was able to improve my skills and get some onsite experience.
                    </p>
                </div>
            </div>

            <div className='timeline-container left'>
                <div className="timeline-content">
                    <h4>2020</h4>
                    <p>
                        I began to get some freelance work while seeking full time employment.
                    </p>
                </div>
            </div>

            <div className='timeline-container right'>
                <div className="timeline-content">
                    <h4>2021 - Present</h4>
                    <p>
                        I was hired at Two Maids Franchising as a software developer.
                    </p>
                </div>
            </div>
        </div>
      </div>
  )
}
