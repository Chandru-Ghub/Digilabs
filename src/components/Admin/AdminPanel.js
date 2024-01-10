import React, { useEffect, useState } from 'react'
import modeUi from '../../Images/Mode UI.png'
import './AdminPanel.css'
import AdminContent from './AdminContent'
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
import UpdatePage from './UpdatePage'
import {Link} from 'react-router-dom'
import{HashLink as Lk} from 'react-router-hash-link'
const AdminPanel = () => {
        const [users,setUsers] = useState([])
        const [toggle,setToggle] = useState(true)
        useEffect(()=>{
            authAxios.get('/subscribers')
            .then(res =>setUsers(res.data))
            .catch(err => console.log(err))
        },[])
  return (
    <div className='panel'>
        <h2>Welcome Admin!</h2>
        <div className="dash1">
        <div className="adminlogo">
            <img src={modeUi} alt="" />
        </div>
            <div className={toggle?"nav1":'nav2'}>
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
        <AdminContent/>
    </div>
  )
}

export default AdminPanel