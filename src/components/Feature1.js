import React from 'react'
import '../style/Feature1.css'
const Feature1 = () => {
  return (
    <div className='feature1' >

        <div className="content">
            <div className="con1" data-aos="fade-left" data-aos-delay='200' data-aos-duration="1000" data-aos-once='true'>
            Elevating Card Programs with Cutting-Edge Technology
            </div>
            <div className="con2" >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="compare" >
                <button>
                Compare all Pro features
                </button>
                <span className="material-symbols-outlined">
            arrow_right_alt
            </span>
            </div>
        </div>

        <div className="content2">
              <div className="conleft clogo" data-aos="fade-up" data-aos-delay='100' data-aos-offset='250' data-aos-duration="1000" data-aos-once='true'>
              <span className="material-symbols-outlined">
              language
              </span>
              <p>Globally Accepted</p>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
              </div>

              <div className="conmid clogo" data-aos="fade-up" data-aos-delay='250' data-aos-offset='250' data-aos-duration="1000" data-aos-once='true'>
              <span className="material-symbols-outlined">
              key
              </span>
              <p>Biometric Integrated</p>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
              </div>

              <div className="conright clogo" data-aos="fade-up" data-aos-delay='400' data-aos-offset='250' data-aos-duration="1000" data-aos-once='true'>
              <span className="material-symbols-outlined">
              lock
              </span>
              <p>Fully Secured</p>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
              </div>
        </div>
    </div>
  )
}

export default Feature1