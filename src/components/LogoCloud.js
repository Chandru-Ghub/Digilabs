import React from 'react'
import '../style/LogoCloud.css'
import Marquee from 'react-fast-marquee'
import img1 from '../Images/ang.png'
import img2 from '../Images/be.png'
import img3 from '../Images/dr.png'
import img4 from '../Images/kin.png'
import img5 from '../Images/lottie.png'
import img6 from '../Images/miro.png'
import img7 from '../Images/nuxt.png'
import img8 from '../Images/wise.png'
const LogoCloud = () => {
  return (
    <div className='logocloud' >
      <div className="marslide">
        <Marquee pauseOnHover={true} delay={1}>
          <ul className='marq'>
          <li>
            <img src={img1} alt="" />
          </li>
          <li>
            <img src={img2} alt="" />
          </li>
          <li>
            <img src={img3} alt="" />
          </li>
          <li>
            <img src={img4} alt="" />
          </li>
          <li>
            <img src={img5} alt="" />
          </li>
          <li>
            <img src={img6} alt="" />
          </li>
          <li>
            <img src={img7} alt="" />
          </li>
          <li>
            <img src={img8} alt="" />
          </li>
          </ul>
        </Marquee>
        </div>
        {/* <span id='about'></span> */}
    </div>
  )
}

export default LogoCloud