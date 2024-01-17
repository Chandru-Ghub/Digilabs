import React from 'react'
import '../style/Component1.css'
const Component1 = () => {
  return (
    <div className='component1' >
      <div className="comp1" data-aos="fade-up" data-aos-delay='100' data-aos-offset='100' data-aos-duration="1000" data-aos-once='true'>
            <span>2 Million</span>
            <div>Customer</div>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>
      <div className="comp1" data-aos="fade-up" data-aos-delay='100' data-aos-offset='200' data-aos-duration="1000" data-aos-once='true'>
            <span>1K</span>
            <div>Downloads</div>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>
      <div className="comp1" data-aos="fade-up" data-aos-delay='100' data-aos-offset='300' data-aos-duration="1000" data-aos-once='true'>
            <span>$73 Million</span>
            <div>Transaction</div>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>
      <div className="comp1" data-aos="fade-up" data-aos-delay='100' data-aos-offset='350' data-aos-duration="1000" data-aos-once='true'>
            <span>2.0</span>
            <div>Latest Version</div>
            <p id='sub'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>
    </div>
  )
}

export default Component1