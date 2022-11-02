import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
// import avatar from '../images/avatar.png';


export default function Hero() {

// Need to look into having a loading state for the spline component...it takes too long to load. Image placeholder?
// const [loading, isLoading] = useState<boolean>(true);

  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2>Hello There.</h2>
            <h3>I'm Tim Abrahamson</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores consectetur nihil itaque accusamus officiis reprehenderit, neque fuga cum repellendus, ex nesciunt sint accusantium! Inventore!
            </p>
        </div>
        <div className='hero-spline-container'>          
            <Spline  scene="https://prod.spline.design/1DmX4NR381ndC3yM/scene.splinecode" />
            {/* <iframe src='https://my.spline.design/avatar-6949499ae7e1c0cf7c8703a1c93907f0/' frameBorder='0' width='100%' height='100%'></iframe> */}
        </div>
    </div>
  )
}