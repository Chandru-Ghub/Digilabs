import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
const AdminContent = () => {
const [subscribers,setSubscribers] = useState([])
const [users,setUsers] = useState([])

useEffect(()=>{
    fetchData()
},[])

const fetchData = async()=>{
    try{
        const subs = await authAxios.get('/subscribers')
        setSubscribers(subs.data)
        const userData = await authAxios.get('/getuser')
        setUsers(userData.data)
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className='admincontent'  id='/users'>
        <div className="adminupdates">
            <div className="subscribers">
            <div className="subsmem">
                Subscribers!
            </div>
           {
                subscribers.map((data,i)=>{
                    return(
                        <ul key={i}>
                            <li className='sno'>
                                {i+1}.
                            </li>
                            <li>
                                {data.email}
                            </li>
                        </ul>
                    )
                })
            }
           </div>
            <div className="subscribers" >
            <div className="subsmem">
                Registered Users!
            </div>
            <table>
            <thead>
            <tr>
                <th>S.NO</th>
                <th>User Name</th>
                <th>Email ID</th>
            </tr>
            </thead>
           {
                users.map((data,i)=>{
                    return(
                       <tbody key={i}>
                        <tr>
                            <td>
                                {i+1}.
                            </td>
                            <td>
                                {data.username}
                            </td>
                            <td>
                                {data.email}
                            </td>
                        </tr>
                       </tbody>
                    )
                })
            }
            </table>
           </div>
        </div>
    </div>
  )
}

export default AdminContent