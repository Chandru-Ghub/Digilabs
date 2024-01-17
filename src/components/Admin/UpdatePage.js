import React, { useContext, useEffect, useState } from 'react'
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
import './UpdatePage.css'
import {v4} from 'uuid'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { imgDB } from '../../Firebase'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { myContext } from '../../App'

const UpdatePage = () => {
    const{logo,ttle,btn} = useContext(myContext)
    const[logoImg,setFile] = useState('');
    const[buttonTxt,setBtnTxt] = useState('');
    const[title,setTitle] = useState('');
    const [open,setOpen] = useState(false);
    const updateData = async()=>{
        setTitle(ttle)
        setBtnTxt(btn)
    }
    useEffect(()=>{
        updateData()
    },[btn])

    
    // Update page Details

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setOpen(true)
        try {
            const update = await authAxios.post('/updatepage',logoImg?{title,buttonTxt,logoImg}:{title,buttonTxt})
            setOpen(false)
            alert('Details updated!')
            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }

    // Handling image
    // https://firebasestorage.googleapis.com/v0/b/shopyecommerce-e73af.appspot.com/o/DigilabsLogo%2F4112446e-7ed3-4aee-ab80-0e8f15f9c6e3?alt=media&token=c384094f-6a01-4f79-9925-494b7d64cc70
    const handleFile =(e)=>{
        setOpen(true)
        const selectFile = e.target.files[0]
        const imgs = ref(imgDB,`DigilabsLogo/${v4()}`)
        uploadBytes(imgs,selectFile)
        .then(data => {console.log(data,'///11')
            getDownloadURL(data.ref)
            .then(url => {console.log(url)
                setFile(url)
                setOpen(false)
            })

    })

    }
  return (
    <div className="updatePageDetails">
         <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
        <div className='currentpg'>
            <div className="curlogo">
                <p>Logo</p> <span>:</span>
                <img className='actimg' src={logo} alt="" />
            </div>
            <div className="titleupdate">
                <p>Title </p> <span>:</span>
                <div>{ttle}</div>
            </div>
            <div className="btnname">
                <p>Button Text</p><span>:</span>
                <div>{btn}</div>
            </div>
    </div>

    <div className="addpageDetails">
       <form onSubmit={handleSubmit}>

<div className="title" id='/upd'>
        <textarea value={title} required onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter Title here' />
        </div>
        <div className="btntext">
            <input value={buttonTxt} onChange={(e)=>setBtnTxt(e.target.value)} required type="text" placeholder='Enter Button text here' />
        </div>

        <div className="image" id='/subs'>
            <input type="file"  onChange={handleFile}/>
        </div>
        <button type='submit'>Update</button>
       </form>
        {
            logoImg ?<div className="preview">
            <img src={logoImg} alt="" />
            <p>Preview Image</p>
        </div>:''
        }
    </div >
    </div>
  )
}

export default UpdatePage