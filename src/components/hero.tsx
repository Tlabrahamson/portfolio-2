import React, { useEffect, useState, Suspense } from 'react'
import Spline from '@splinetool/react-spline';
// import avatar from '../images/avatar.png';

export default function Hero() {

  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2 className='large-heading'>Hello There.<br/>I'm <span>Tim Abrahamson</span> </h2>
        </div>
        <div className='hero-spline-container'>
            <div>
              <Spline scene="https://prod.spline.design/1DmX4NR381ndC3yM/scene.splinecode" />
            </div>
        </div>
    </div>
  )
}