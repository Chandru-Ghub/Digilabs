import React, { useEffect, useState } from 'react'
import modeUi from '../../Images/Mode UI.png'
import './AdminPanel.css'
import AdminContent from './AdminContent'
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
import UpdatePage from './UpdatePage'
import {Link} from 'react-router-dom'
const AdminPanel = () => {
        const [users,setUsers] = useState([])
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
            <div>
                users
            </div>
            <div>
                subscribers
            </div>
            <div>
                admin
            </div>
            <div>
                <Link to='/'>HomePage</Link>
            </div>
        </div>
        <UpdatePage/>
        <AdminContent/>
    </div>
  )
}

export default AdminPanel