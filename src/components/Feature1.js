import React from 'react'
import '../style/Feature1.css'
const Feature1 = () => {
  return (
    <div className='feature1'>

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

        <div className="content2">
              <div className="conleft clogo">
              <span class="material-symbols-outlined">
              language
              </span>
              <p>Globally Accepted</p>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
              </div>

              <div className="conmid clogo">
              <span class="material-symbols-outlined">
              key
              </span>
              <p>Biometric Integrated</p>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
              </div>

              <div className="conright clogo">
              <span class="material-symbols-outlined">
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