import React, { useState } from 'react'
import axios from 'axios'
import '../style/Subscription.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { authAxios } from '../axiosInterceptor/AxiosInterceptor';
const Subscription = () => {
    const[email,setEmail] = useState('')
    const [open,setOpen] = useState(false);
    const status = window.localStorage.getItem('isAdmin')
    const addSubscribers= async(e)=>{
        e.preventDefault()
        setOpen(true)
        try {
            const data = await authAxios.post('/newsubscriber',{email})
            if(data){
                setEmail('')
                if(data.status==200) alert('⚠️'+ data.data +' Please check your emailID')
                else alert('Thank you subscribing!!')
                setOpen(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <div>
             <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
    {
        !status && <>
             <div className='subsContainer'>
            <form className='submail' onSubmit={addSubscribers}>
                <h3>Subscribe now</h3>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-once='true'>
                    <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
                    <button>SUBSCRIBE</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere nesciunt saepe id sed ut quia provident illum cupiditate rem quod ipsa vel, ipsum molestiae</p>
            </form>
    </div>


        </>
    }
    
   </div>
  )
}

export default Subscription