import React, { useEffect, useState } from 'react'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import '../style/MailComp.css'
import gmail from '../Images/gmail1.png'
const UserDetails = ({userId,setClose}) => {
    const id = userId
    const[userData,setUserData] = useState('')
    const fetchData=async()=>{
        try{
            const userData = await authAxios.get('/getuserdetail/'+id)
            console.log(userData)
            setUserData(userData.data)
        }catch(err){
          console.log(err)
        }
   
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='dataContainer'>
        <div className="datamanager">
            <h4>User Details!</h4>
        </div>
        <span  onClick={()=>setClose(false)} className="material-symbols-outlined">
                close
                </span>
                <div className="perdetails">

                    <div>
                        <span>ID</span>:
                        <p>{userData._id}</p>
                    </div>
                    <div>
                        <span>UserName</span>:
                        <p>{userData.username}</p>
                    </div>
                    <div>
                        <span>email ID</span>:
                        <p>{userData.email}</p>
                    </div>
                    <div>
                        <span>CreatedAt </span>:
                        <p>{userData.createdAt}</p>
                    </div>
                </div>
    </div>
  )
}

export default UserDetails