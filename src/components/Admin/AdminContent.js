import React, { useContext, useEffect, useState } from 'react'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MailComp from '../MailComp';
import { myContext } from '../../App';
import UserDetails from '../UserDetails';


const AdminContent = ({logo}) => {
const [open,setOpen] = useState(false);
const [mail,setMail] = useState('');
const [userId,setUserId] = useState('');
const[show,setShow] = useState(false)
const[close,setClose] = useState(false)
const {user,subscribers} = useContext(myContext)

// Delete Subscribers or users
const handleDelete = async(id,username)=>{
  const del = window.confirm('⚠️ Are you sure you want delete the Details!!')
 if(del){
  setOpen(true)
  try{
   await authAxios.delete(username?'/deleteuser/'+id :'/deletesubscribers/'+id)
   setOpen(false)
   toast.success(username?'users deleted':'Subscription deleted')
   window.location.reload()
  }
  catch(err){
   console.log(err)
  }
 }
}
// Send mail to users!
const sendMail=(email)=>{
  setShow(true)
  setMail(email)
}

// Show users Details!
const showDetails=(id)=>{
  setClose(true)
  setUserId(id)  
}
  return (
    <div className='admincontent'  id='/users'>
        <ToastContainer/>
        <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
        <div className="adminupdates">
            <div className="subscribers">
            <div className="subsmem">
                Subscribers!
            </div>
           {
                subscribers.map((data,i)=>{
                    return (
                      <ul key={i}>
                        <li className="sno">{i + 1}.</li>
                        <li className='emails'>{data.email}</li>
                        <li className='actions'>
                          <p onClick={()=>sendMail(data.email)} className='sendmail' title='Send mail'>
                            <span className="material-symbols-outlined">mail</span>
                          </p>
                          <p onClick={()=>handleDelete(data._id)} className='deletemail' title='Delete subscription!'>
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </p>
                        </li>
                      </ul>
                    );
                })
            }
           </div>
           {show?<MailComp logo={logo} email={mail} setShow={setShow}/>:''}
           {close?<UserDetails userId={userId} setClose={setClose}/>:''}
            <div className="subscribers" >
            <div className="subsmem">
                Registered Users!
            </div>
            <table>
            <thead>
            <tr>
                <th>S.NO</th>
                <th>User Name</th>
                <th>Email ID</th>
                <th>Actions</th>
            </tr>
            </thead>
           {
               user.map((data,i)=>{
                    return(
                       <tbody key={i}>
                        <tr>
                            <td>
                                {i+1}.
                            </td>
                            <td>
                                {data.username}
                            </td>
                            <td>
                                {data.email.split('')}
                            </td>
                            <td>
                            <li  className='threework'>
                          <p onClick={()=>sendMail(data.email)} className='sendmail' title='Send mail'>
                            <span className="material-symbols-outlined">mail</span>
                          </p>
                          <p onClick={()=>showDetails(data._id)} className='readmail' title='Send mail'>
                          <span className="material-symbols-outlined">library_books</span>
                          </p>
                         { !data.isAdmin ? <p onClick={()=>handleDelete(data._id,true)} className='deletemail' title='Delete subscription!'>
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </p>:'ADMIN'}
                        </li>
                            </td>
                        </tr>
                       </tbody>
                    )
                })
            }
            </table>
           </div>
        </div>
    </div>
  )
}

export default AdminContent