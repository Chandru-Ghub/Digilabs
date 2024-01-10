import React, { useState } from 'react'
import axios from 'axios'
import '../style/Subscription.css'
const Subscription = () => {
    const[email,setEmail] = useState('')
    const status = window.localStorage.getItem('isAdmin')
    const addSubscribers= async(e)=>{
        e.preventDefault()
        console.log(email)
        try {
            const data = await axios.post('https://digilabsbackend.onrender.com/api/newsubscriber',{email})
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <div>
    {
        !status && <>
             <div className='subsContainer'>
            <form className='submail' onSubmit={addSubscribers}>
                <h3>Subscribe now</h3>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-once='true'>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
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