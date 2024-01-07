import logo from './logo.svg';
import './App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCloud from './components/LogoCloud';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Component1 from './components/Component1';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Cards from './components/Cards';
import { BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnnouncementBar/>
        <Navbar/>
        <HeroSection/>
        <LogoCloud/>
        <Feature1/>
        <Feature2/>
        <Cards/>
        <Component1/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
