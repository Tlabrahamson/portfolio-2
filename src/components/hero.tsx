import React, { useEffect, useState, Suspense } from 'react'
import Spline from '@splinetool/react-spline';
// import avatar from '../images/avatar.png';
import blob from '../images/blob.svg';


export default function Hero() {

// Need to look into having a loading state for the spline component...it takes too long to load. Image placeholder?
// const [loading, isLoading] = useState<boolean>(true);

  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2>Hello There.</h2>
            <h3>I'm Tim Abrahamson</h3>
            <p>
                I'm a software devloper based out of Birmingham, AL. 
            </p>
        </div>
        <div className='hero-spline-container'>
            {/* <img src={blob} alt="Blob" /> */}
            <Spline scene="https://prod.spline.design/1DmX4NR381ndC3yM/scene.splinecode" />
        </div>
    </div>
  )
}