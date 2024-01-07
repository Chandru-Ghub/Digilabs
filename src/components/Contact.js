import React from 'react'
import '../style/Contact.css'
const Contact = () => {
  return (
    <div className='contact' >
      <div className="limits" data-aos="fade-down" data-aos-delay='50' data-aos-duration="1000" data-aos-once='true'>
      Unlock Limitless Possibilities with Our New Card Solutions
      </div>
      <div className="supports">
          <div className="card">
              <p>Unlock your card</p>
              <span className="material-symbols-outlined">
                credit_card
                </span>
          </div>
          
          <div className="customer">
          <p>Customer support</p>
          <span className="material-symbols-outlined">
          headphones
          </span>
          </div>
      </div>
    </div>
  )
}

export default Contact