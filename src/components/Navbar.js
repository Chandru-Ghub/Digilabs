import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import modeUi from '../Images/Mode UI.png'
const Navbar = () => {
    const [toggle,setToggle] = useState(true)

  return (
    <div className="navbar">
      <div className="navleft">
        <img src={modeUi} alt="" />
      </div>

      <div className={toggle?"navmid":'navtab'}>
        <ul>
          <li>Card access <span class="material-symbols-outlined">
expand_more
</span></li>
          <li>Banking</li>
          <li>Processing</li>
          <li>About</li>
          <li>Carrier</li>
          <li>Contact</li>
          {!toggle?
          <p>
              <h3>Mode UI</h3>
          </p>  :''
        }
        </ul>
      </div>

      <div className="navright">
        <div className="logout">
        <span>Login</span>
        <span className="material-symbols-outlined">logout</span>
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
