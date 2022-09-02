import React from 'react'
import Spline from '@splinetool/react-spline';


export default function hero() {
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
          {/* Spline thing goes here */}
          {/* <Spline scene="https://prod.spline.design/BO401uc4ixPUhPrC/scene.splinecode" /> */}
        </div>
    </div>
  )
}
