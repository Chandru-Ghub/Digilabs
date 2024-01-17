import React, { useEffect, useState } from 'react'
import './AdminPanel.css'
import AdminContent from './AdminContent'
import UpdatePage from './UpdatePage'
import {Link, useLocation} from 'react-router-dom'
import{HashLink as Lk} from 'react-router-hash-link'
const AdminPanel = ({logo}) => {
    const [toggle,setToggle] = useState(true)
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className='panel'>
        <h2>Welcome Admin!</h2>
        <div className="dash1">
        <div className="adminlogo">
            <img src={logo} alt="" />
        </div>
            <div className={toggle?"nav2":'nav1'}>
           
                    <div onClick={()=>setToggle(!toggle)}>
                    <Lk smooth to='#/subs'>subscribers</Lk>
                    </div>
                    <div  onClick={()=>setToggle(!toggle)}>
                    <Lk smooth to='#/users'>Users</Lk>
                    </div>
                    <div  onClick={()=>setToggle(!toggle)}>
                    <Lk smooth to='#/upd'>update</Lk>
                    </div>
            
            </div>
            <div className='navhome'>
            <div >
                <Link to='/'><span className="material-symbols-outlined">
                home
                </span></Link>
            </div>
            <span  onClick={()=>setToggle(!toggle)} className="material-symbols-outlined">
                {toggle?'menu':'close'}
                </span>
            </div>
        </div>
        <UpdatePage/>
        <AdminContent logo={logo}/>
    </div>
  )
}

export default AdminPanel