import React, { useEffect, useState } from 'react'
import '../style/Register.css'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import AnnouncementBar from '../components/AnnouncementBar'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
const Register = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [open,setOpen] = useState(false);
    const [err,setErr] = useState('');

        const handleSubmit =async(e)=>{
            e.preventDefault()
            setErr('')
            setOpen(true)
            console.log(username,password)
            try {
                const res = await authAxios.post('https://digilabsbackend.onrender.com/api/signup',{username,password,email})
                setOpen(false)
                setErr(res.data)
                toast.success('Login sucessfully!!')
                navigate('/signin')

            } catch (error) {
                setOpen(false)
                console.log(error.response.data)
                if(error.response.data == 'Username already existed!')
                setErr('Username already existed!')
            else
                setErr('email ID already existed!')
        }
        }
    
    
  return (
    <div className='login'>
        <AnnouncementBar/>
        <Navbar/>
                      <div>
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
</div>
        <div className='register'>
        <ToastContainer/>
        <div className="registercon loginpg">
            <h3>SHOPY</h3>
            <div className="regtitle">
                SIGN UP
            </div>
            <form  className="registerdata" onSubmit={handleSubmit}>
                <div className="leftform rfm">
                    <input onChange={(e)=>setUsername(e.target.value)} required className="username" placeholder='username' />
                    <input onChange={(e)=>setEmail(e.target.value)} required className="username" placeholder='email' />
                    <input onChange={(e)=>setPassword(e.target.value)}  required className="password" placeholder='password' />
                    <p style={{color:err=='User Registred sucessfully!'?'#14ef14':'red',fontWeight:'700'}}>{err}</p>
                </div>
            <div className="createaccountbtn">
                <button type='submit' className='btncrtacc'>
                    SIGNUP
                </button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register