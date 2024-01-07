import React from 'react'
import '../style/HeroSection.css'
const HeroSection = () => {
  return (
    <div className='hero' >
        <div className='con1'>Seamless experience</div>
        <div className="con2"  data-aos="fade-down" data-aos-delay='50' data-aos-duration="1000" data-aos-once='false'>
              Unleashing the Next Generation of card Solution
        </div>
          <div className="con3">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>

          <div className="con4" id='bio'>
              <button>Unlock your Card</button>
              <span class="material-symbols-outlined">
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