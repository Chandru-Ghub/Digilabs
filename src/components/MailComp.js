import React, { useContext, useState } from 'react'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import '../style/MailComp.css'
import gmail from '../Images/gmail1.png'
const MailComp = ({email,setShow,logo}) => {

    const[message,setMessage] = useState('')
    const handleSend=async(e)=>{
        e.preventDefault()
        try{
            const mail = authAxios.post('/sendmail',{email,message,logo})
            toast.success('Email send Sucessfully!')
            setShow(false)
        }catch(err){
          console.log(err)
        }
   
    }
  return (
    <div className='emailContainer'>
        <div className="emailmanager">
          <img src={gmail} alt="" />
        <h4>Email Manager!</h4>
        </div>
        <span  onClick={()=>setShow(false)} className="material-symbols-outlined">
                close
                </span>
        <ToastContainer/>
        <div className="sendmails">
                <form onSubmit={handleSend}>
                  <p>To:</p>
                <div>{email}</div>
                <p>Message:</p>
            <textarea required onChange={(e)=>setMessage(e.target.value)} value={message} name="" id="" cols="30" rows="10"></textarea>
            <button type='submit'>Send</button>
                </form>
        </div>
    </div>
  )
}

export default MailComp