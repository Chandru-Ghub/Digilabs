import React, { useEffect, useState } from 'react'
import '../style/Register.css'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import AnnouncementBar from '../components/AnnouncementBar'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Login = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [open,setOpen] = useState(false);
    const [err,setErr] = useState('');

        const handleSubmit =async(e)=>{
            e.preventDefault()
            setOpen(true)
            console.log(username,password)
            try {
                const res = await authAxios.post('https://digilabsbackend.onrender.com/api/signin',{username,password})
                window.localStorage.setItem('modeUItoken',res.data.token)
                window.localStorage.setItem('isAdmin',res.data.data.isAdmin)
                setOpen(false)
                toast.success('Login sucessfully!!')
                window.location.href = '/'
            } catch (error) {
                setOpen(false)
                if(error.response.data == 'invalid username!')
                setErr('invalid username!')
            else
                setErr('Wrong credentials!')
                console.log(error.response.data)
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
            <div className="demo">
                <div className="dm1">
                <p>Admin User</p>
                <div>
                    <p>username: <span>chandru</span></p>
                    <p>password: <span>12345</span></p>
                </div>
                </div>
                <div className="dm1">
                <p>Demo User</p>
                <div>
                    <p>username: <span>user1</span></p>
                    <p>password: <span>12345</span></p>
                </div>
                </div>
            </div>
        <div className="registercon loginpg">
            <h3>SHOPY</h3>
            <div className="regtitle">
                SIGN IN
            </div>
            <form  className="registerdata" onSubmit={handleSubmit}>
                <div className="leftform rfm">
                    <input onChange={(e)=>setUsername(e.target.value)} required className="username" placeholder='username' />
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}  required className="password" placeholder='password' />
                    <p style={{color:'red'}}>{err}</p>
                </div>
               
            
            <div className="forgotpass">
               <span>
               </span>
                <Link to='/signup' ><span>SignUp or Register</span></Link>
            </div>
            <div className="createaccountbtn">
                <button type='submit' className='btncrtacc'>
                    LOGIN
                </button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login