import React from 'react'
import '../style/Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import modeUi from '../Images/Mode UI.png'
const Footer = () => {
  return (

    <div className="footer">
        <div className="foottop">
          <img src={modeUi} alt="" />
          <div className="fnote">
          Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices
          </div>
        </div>
        <div className="line2"></div>
    <div className='footertop'>
      <div className="f1">
          <div className="fhead">
            Company
          </div>
          <ul>
            <li>About us</li>
            <li>Pricing</li>
            <li>Contact us</li>
            <li>Features</li>
          </ul>
      </div>
      <div className="f1">
          <div className="fhead">
            Product
          </div>
          <ul>
            <li>Figma design system</li>
            <li>los kit</li>
            <li>Android kit</li>
            <li>Wireframe</li>
          </ul>
      </div>
      <div className="f1">
          <div className="fhead">
            Resources
          </div>
          <ul>
            <li>Templates</li>
            <li>Landing pages</li>
            <li>Documentation</li>
            <li>Comp library</li>
          </ul>
      </div>
      <div className="f1">
          <div className="fhead">
            Legal
          </div>
          <ul>
            <li>Privacy policy</li>
            <li>Termas & Conditions</li>
            <li>Disclaimer</li>
            <li>Affiliate programme</li>
          </ul>
      </div>
    </div>
      <div className="footerend">
        <ul className="footerlogo">
            <FaGithub />
            <FaLinkedin/>
            <FaDiscord/>
     
        </ul>
          <p>&copy; 2024 Mode UI Inc. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer