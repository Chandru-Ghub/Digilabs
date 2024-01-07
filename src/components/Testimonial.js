import React from 'react'
import { FaStar } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';
import '../style/Testimonial.css'
import img1 from '../Images/ang.png'
import img2 from '../Images/be.png'
import img3 from '../Images/dr.png'
import img4 from '../Images/kin.png'
import t1 from '../Images/test1.jpg'
import img5 from '../Images/lottie.png'
const Testimonial = () => {

  const images = [img1,img2,img3,img4,img5]
  return (
    <div className='testimonial' >
      <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-once='true'>Testimonial</h2>
      <p>Mode UI is trusted by over 1 million users and 100,000 companies worldwide.</p>
      <div className='line1'></div>
      <Marquee pauseOnClick='true' gradient='true' gradientColor='white' gradientWidth={150}>
          {
            images.map((data,i) =>{
              return(
                <div className='incon' key={i}>
              <img src={data} alt="" />
                <div className='reviewcus'>
                  I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.
                  </div>

                  <div className='person'>
                    <img src={t1} alt="" />
                    <div className='name'>Nick Babich</div>
                    <p>Lead Designer</p>
                    <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                  </div>
          </div>
              )
            })
          }
          </Marquee>
          <span id='contact'></span>
    </div>
  )
}

export default Testimonial