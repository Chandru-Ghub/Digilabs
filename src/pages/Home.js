import React, { useEffect, useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LogoCloud from '../components/LogoCloud';
import Feature1 from '../components/Feature1';
import Feature2 from '../components/Feature2';
import Component1 from '../components/Component1';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';
import Cards from '../components/Cards';
import Subscription from '../components/Subscription';
import axios from 'axios';
const Home = () => {
  const[logo,setLogo] = useState('')
  const[title,setTitle] = useState('')
  const[btn,setBtn] = useState('')
  useEffect(()=>{
    axios.get('https://digilabsbackend.onrender.com/api/getpage')
    .then(res =>{
      setLogo(res.data.logoImg)
      setTitle(res.data.title)
      setBtn(res.data.buttonTxt)
    }
    )
    .catch(err => console.log(err))
  })
  return (
    <div className="App">
         <AnnouncementBar/>
        <Navbar logo={logo}/>
        <HeroSection title={title} btn={btn}/>
        <LogoCloud/>
        <Feature1/>
        <Feature2/>
        <Cards/>
        <Component1/>
        <Subscription/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home