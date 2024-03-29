import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2 className='large-heading'>Hello There. I'm <span>Tim Abrahamson</span> </h2>
        </div>
        <div className='hero-spline-container'>
            <div>
              {loading && <div className='spinning-loader'></div>}
              <Spline  onLoad={() => {setLoading(false);}}scene="https://prod.spline.design/1DmX4NR381ndC3yM/scene.splinecode" />
            </div>
        </div>
    </div>
  )
}