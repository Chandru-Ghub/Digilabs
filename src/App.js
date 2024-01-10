import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import { useState } from 'react';
function App() {
  const status = window.localStorage.getItem('isAdmin')
  const [toggle,setToggle] = useState(true)
  return (
    <div className="App">
    {
      status && 
      <div className={toggle?"banner":'banner2'}>
        <p onClick={()=>setToggle(!toggle)}>x</p>
  public user can only able to acess the subscription not a admin or registred user
</div>
    }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={ <AdminPanel/>}/>
        </Routes>
        <Routes>
          <Route path='/signin' element={ <Login/>}/>
        </Routes>
        <Routes>
          <Route path='/signup' element={ <Signin/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
