import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import modeUi from '../Images/Mode UI.png'
import{HashLink as Link} from 'react-router-hash-link'
import {motion,useScroll} from 'framer-motion'
const Navbar = () => {
    const [toggle,setToggle] = useState(true)
    const {scrollYProgress} = useScroll()
  return (
    <div className="navbar">
       <motion.div
                    style={{
                        scaleX:scrollYProgress,
                        position:'fixed',
                        top:121,
                        right:0,
                        left:0,
                        height:2,
                        background:'#bc1ee4',
                        transformOrigin:'0%'

                    }}
                ></motion.div>

      <div className="navleft">
        <img src={modeUi} alt="" />
      </div>

      <div className={toggle?"navmid":'navtab'}>
        <ul>
          <li><Link onClick={()=>setToggle(!toggle)} to='/#bio' smooth style={{color:'inherit'}}>Our Users</Link></li>
          <li><Link onClick={()=>setToggle(!toggle)} to='/#about' smooth style={{color:'inherit'}}>About</Link></li>
          <li><Link onClick={()=>setToggle(!toggle)}to='/#card' smooth style={{color:'inherit'}} className="arr">Card access <span class="material-symbols-outlined">
expand_more
</span></Link></li>
          <li><Link onClick={()=>setToggle(!toggle)} to='/#banking' smooth style={{color:'inherit'}}>Banking</Link></li>
          <li><Link onClick={()=>setToggle(!toggle)} to='/#testi' smooth style={{color:'inherit'}}>Testimonial</Link></li>
          <li><Link onClick={()=>setToggle(!toggle)} to='/#contact' smooth style={{color:'inherit'}}>Contact</Link></li>
        </ul>
      </div>

      <div className="navright">
        <div className="logout">
        <span>Login</span>
        <span className="material-symbols-outlined">login</span>
        </div>
        <div className="menu">
            <span onClick={()=>setToggle(!toggle)} className="material-symbols-outlined">
                {toggle?'menu':'close'}
                </span>
      </div>
      </div>
      
   
    </div>
  );
};

export default Navbar;
