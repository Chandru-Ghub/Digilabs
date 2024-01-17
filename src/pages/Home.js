import React, { useContext } from 'react'
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
import { myContext } from '../App';
const Home = () => {
  const {logo,ttle,btn} = useContext(myContext)
  return (
    <div className="App">
         <AnnouncementBar/>
        <Navbar logo={logo}/>
        <HeroSection ttle={ttle} btn={btn}/>
        <LogoCloud/>
        <Feature1/>
        <Feature2/>
        <Cards/>
        <Component1/>
        <Subscription logo={logo}/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home