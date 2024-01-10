import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
function App() {
  return (
    <div className="App">
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
