import React from 'react';
import designOne from '../images/dino-digs.svg';
import designTwo from '../images/dodeca.svg';
import designThree from '../images/flourish.svg';
import designFour from '../images/spacey.svg';
import designFive from '../images/SYNTH.gif';
import designSix from '../images/cocktail.svg';

// https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874744/Portfolio/dodeca_vzsnsu.webp
// https://res.cloudinary.com/dyhl0yyml/image/upload/v1677874743/Portfolio/flourish_esczoh.svg
// https://res.cloudinary.com/dyhl0yyml/image/upload/v1677874742/Portfolio/spacey_whelqa.svg
// https://res.cloudinary.com/dyhl0yyml/image/upload/v1677874741/Portfolio/dino-digs_smr9ep.svg
// https://res.cloudinary.com/dyhl0yyml/image/upload/v1677874741/Portfolio/cocktail_usqsn6.svg
// https://res.cloudinary.com/dyhl0yyml/image/upload/q_auto/v1677874746/Portfolio/SYNTH_a5txzu.gif

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
            <img src={designOne} alt="Dino Digs Landing Page" />
            <img src={designTwo} alt="Dodeca Landing Page" />
            <img src={designThree} alt="Flourish Landing Page" />
            <img src={designFour} alt="Spacey Landing Page" />
            <img src={designFive} alt="SYNTH. Hero" />
            <img src={designSix} alt="Cocktail Roulette" />
        </div>
      </div>
    </div>
  )
}