import React from 'react'
import '../style/Feature2.css'
import Marquee from 'react-fast-marquee'
const Feature2 = () => {
  return (
    <div className='feature2'>
       <div className="content">
            <div className="con1">
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
        <div className="f2">
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
          <div className="revenue">
              <div className="spend">
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
                  <span>USD</span>
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
              </div>
          </div>
        </div>
    </div>
  )
}

export default Feature2