import React, { useEffect, useState } from 'react'
import '../style/HeroSection.css'
const HeroSection = ({title,btn}) => {

  return (
    <div className='hero' >
        <div className='con1'>Seamless experience</div>
        <div className="con2"  data-aos="fade-down" data-aos-delay='50' data-aos-duration="1000" data-aos-once='false'>
              {title ? title:'Unleashing the Next Generation of card Solution'}
        </div>
          <div className="con3">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>

          <div className="con4" id='bio'>
              <button>{btn ?btn :'Unlock your Card'}</button>
              <span className="material-symbols-outlined">
arrow_right_alt
</span>
          </div>
          <div className="con5" >
            *No credit card required
          </div>
    </div>
  )
}

export default HeroSection