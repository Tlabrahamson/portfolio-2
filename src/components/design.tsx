import React from 'react';

export default function Design() {

  return (
    <div className='design-background'>
      <div className='design-container'>
        <div className='design-section'>
            <h3 className='large-heading'>Design<span>:</span></h3>
            <p>
              I dabble in design.
            </p>
        </div>
        <div className="design-grid-section">
            <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874741/Portfolio/dino-digs_smr9ep.svg" alt="Dino Digs Landing Page" />
            <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874744/Portfolio/dodeca_vzsnsu.svg" alt="Dodeca Landing Page" />
            <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874743/Portfolio/flourish_esczoh.svg" alt="Flourish Landing Page" />
            <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874742/Portfolio/spacey_whelqa.svg" alt="Spacey Landing Page" />
            {/* <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874746/Portfolio/SYNTH_a5txzu.gif" alt="SYNTH. Hero" /> */}
            <img src="https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874741/Portfolio/cocktail_usqsn6.svg" alt="Cocktail Roulette" />
        </div>
      </div>
    </div>
  )
}