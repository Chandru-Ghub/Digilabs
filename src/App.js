import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { createContext, useEffect, useState } from 'react';
import img1 from './Images/lottie.png'
import img2 from './Images/be.png'
import img3 from './Images/dr.png'
import img4 from './Images/kin.png'
import { authAxios } from './axiosInterceptor/AxiosInterceptor';
import Marquee from 'react-fast-marquee'
export const myContext = createContext();
function App() {
  const status = window.localStorage.getItem('isAdmin')
  const [toggle,setToggle] = useState(true)
  const[logo,setLogo] = useState('')
  const[ttle,setTitle] = useState('')
  const[btn,setBtn] = useState('')
  const [subscribers,setSubscribers] = useState([])
  const [user,setUsers] = useState([])
  const fetchData = async()=>{
    // setOpen(true)
      try{
          const subs = await authAxios.get('/subscribers')
          setSubscribers(subs.data)
          const userData = await authAxios.get('/getuser')
          setUsers(userData.data)
      }catch(err){
          console.log(err)
      }
  }

useEffect(()=>{
  fetchData()
},[])
  useEffect(()=>{
    authAxios.get('/getpage')
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
    {
      status && 
      <div className={toggle?"banner":'banner2'}>
 
       <div className='plogo'>
       <img src={logo} alt="" />
       </div>
        <span onClick={()=>setToggle(!toggle)} className="material-symbols-outlined">
               close
                </span>
<p>  public user can only able to acess the subscription not a admin or registred user</p>
  <Marquee pauseOnHover={true} speed={30} delay={1} className='non'>
          <ul className='marqs'>
          <li>
            <img src={img1} alt="" />
          </li>
          <li>
            <img src={img2} alt="" />
          </li>
          <li>
            <img src={img3} alt="" />
          </li>
          <li>
            <img src={img4} alt="" />
          </li>
          </ul>
        </Marquee>
</div>
    }

    <myContext.Provider value={{logo,ttle,btn,subscribers,user,setSubscribers}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={ <AdminPanel logo={logo} subscribers={subscribers} user={user}/>}/>
        </Routes>
        <Routes>
          <Route path='/signin' element={ <Login/>}/>
        </Routes>
        <Routes>
          <Route path='/signup' element={ <Register/>}/>
        </Routes>
        </BrowserRouter>
    </myContext.Provider>
    </div>
  );
}

export default App;
