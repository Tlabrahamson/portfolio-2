import React, { useEffect, useState, Suspense } from 'react'
import Spline from '@splinetool/react-spline';
// import avatar from '../images/avatar.png';

export default function Hero() {

  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2>Hello There.</h2>
            <h3>I'm Tim Abrahamson</h3>
            <p>
                I'm a software developer based out of Birmingham, AL. 
            </p>
        </div>
        <div className='hero-spline-container'>
            <div>
              <Spline scene="https://prod.spline.design/1DmX4NR381ndC3yM/scene.splinecode" />
            </div>
        </div>
    </div>
  )
}