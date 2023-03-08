import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});

export default function Design() {

  return (
    <div className='design-background'>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='design-wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 0L20.8 10C43.2 20 84.8 40 128 50C171.2 60 212.8 60 256 62C299.2 64 340.8 68 384 70C427.2 72 468.8 72 512 80C555.2 88 596.8 104 640 100C683.2 96 724.8 72 768 54C811.2 36 852.8 24 896 24C939.2 24 980.8 36 1024 34C1067.2 32 1108.8 16 1152 28C1195.2 40 1236.8 80 1280 90C1323.2 100 1364.8 80 1408 64C1451.2 48 1492.8 36 1536 40C1579.2 44 1620.8 64 1664 78C1707.2 92 1748.8 100 1792 94C1835.2 88 1876.8 68 1899.2 58L1920 48V120H1899.2C1876.8 120 1835.2 120 1792 120C1748.8 120 1707.2 120 1664 120C1620.8 120 1579.2 120 1536 120C1492.8 120 1451.2 120 1408 120C1364.8 120 1323.2 120 1280 120C1236.8 120 1195.2 120 1152 120C1108.8 120 1067.2 120 1024 120C980.8 120 939.2 120 896 120C852.8 120 811.2 120 768 120C724.8 120 683.2 120 640 120C596.8 120 555.2 120 512 120C468.8 120 427.2 120 384 120C340.8 120 299.2 120 256 120C212.8 120 171.2 120 128 120C84.8 120 43.2 120 20.8 120H0V0Z" fill="#0099FF"/>
      </svg>
      <div className='design-container'>
        <div className='design-section'>
            <h3 className='large-heading'>Design<span>:</span></h3>
            <p>
              I dabble in design.
            </p>
        </div>
        <div className="design-grid-section">
            <img data-aos="fade-up" data-aos-duration="500" src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874741/Portfolio/dino-digs_smr9ep.svg" alt="Dino Digs Landing Page" />
            <img data-aos="fade-up" data-aos-duration="500" src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874744/Portfolio/dodeca_vzsnsu.svg" alt="Dodeca Landing Page" />
            <img data-aos="fade-up" data-aos-duration="500" src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874743/Portfolio/flourish_esczoh.svg" alt="Flourish Landing Page" />
            <img data-aos="fade-up" data-aos-duration="500" src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874742/Portfolio/spacey_whelqa.svg" alt="Spacey Landing Page" />
            <video data-aos="fade-up" data-aos-duration="500" autoPlay={true} loop={true} muted={true} width={300}>
              <source src="https://res.cloudinary.com/dyhl0yyml/video/upload/v1677902180/Portfolio/SYNTH_nm32hz.webm" type="video/webm" />
            </video>
            <img data-aos="fade-up" data-aos-duration="500" src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874741/Portfolio/cocktail_usqsn6.svg" alt="Cocktail Roulette" />
        </div>
      </div>
      <svg width="1920" height="120" viewBox="0 0 1920 120" className='design-second-wave' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector-two" fillRule="evenodd" clipRule="evenodd" d="M0 0L20.8 10C43.2 20 84.8 40 128 50C171.2 60 212.8 60 256 62C299.2 64 340.8 68 384 70C427.2 72 468.8 72 512 80C555.2 88 596.8 104 640 100C683.2 96 724.8 72 768 54C811.2 36 852.8 24 896 24C939.2 24 980.8 36 1024 34C1067.2 32 1108.8 16 1152 28C1195.2 40 1236.8 80 1280 90C1323.2 100 1364.8 80 1408 64C1451.2 48 1492.8 36 1536 40C1579.2 44 1620.8 64 1664 78C1707.2 92 1748.8 100 1792 94C1835.2 88 1876.8 68 1899.2 58L1920 48V120H1899.2C1876.8 120 1835.2 120 1792 120C1748.8 120 1707.2 120 1664 120C1620.8 120 1579.2 120 1536 120C1492.8 120 1451.2 120 1408 120C1364.8 120 1323.2 120 1280 120C1236.8 120 1195.2 120 1152 120C1108.8 120 1067.2 120 1024 120C980.8 120 939.2 120 896 120C852.8 120 811.2 120 768 120C724.8 120 683.2 120 640 120C596.8 120 555.2 120 512 120C468.8 120 427.2 120 384 120C340.8 120 299.2 120 256 120C212.8 120 171.2 120 128 120C84.8 120 43.2 120 20.8 120H0V0Z" fill="#0099FF"/>
      </svg>
    </div>
  )
}