import React from 'react'
import '../style/Feature2.css'
import Marquee from 'react-fast-marquee'
const Feature2 = () => {
  return (
    <div className='feature2'>
       <div className="content">
            <div className="con1" data-aos="fade-left"  data-aos-delay='200' data-aos-duration="1000" data-aos-once='true'>
            Elevating Card Programs with Cutting-Edge Technology
            </div>
            <div className="con2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="compare">
                <button>
                Compare all Pro features
                </button>
                <span class="material-symbols-outlined">
            arrow_right_alt
            </span>
            </div>
        </div>

        <div className="rows">
        <div className="f2" data-aos="fade-right"  data-aos-delay='200' data-aos-duration="1000" data-aos-once='true'>
            <div className='f2top'>
                Global library for fonts and color
            </div>
            <div className="f2mid">
            We have a global style guide, and you can simply change the fonts and colors to match your preferences. 
            </div>
            <div className="themestype">
            <Marquee>
                <ul className='thememarq'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </Marquee>
            <Marquee direction='reverse' >
                <ul className='thememarq mq2'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </Marquee>

            </div>
        </div>
          <div className="revenue" data-aos="fade-up" data-aos-delay='200' data-aos-offset='250' data-aos-duration="1000" data-aos-once='true' >
              <div className="spend" >
                <p>Spending</p>
                <div>
                <span class="material-symbols-outlined">
                credit_card
                </span>
                <p>9349 visa card</p>
                </div>
              </div>

              <div className="spendmid">
                  <h3>127.14</h3>
                  <span style={{fontSize:'35px',fontWeight:'700'}}>USD</span>
              </div>
              <div className="spendmid2">
                <div>vs last week</div>
                <div>Last Purchase (Feb 24 19:59 UTC-5)</div>
              </div>
              <div className="spendend">
                <ul>
                  <li>400 USD</li>
                  <li>1000 USD</li>
                  <li>5000 USD</li>
                </ul>
                <p style={{background:'#5d2a6a',height:'8px',borderRadius:'10px',marginTop:'10px'}}></p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Feature2