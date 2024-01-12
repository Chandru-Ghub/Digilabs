import React, { useEffect, useState } from 'react'
import { authAxios } from '../../axiosInterceptor/AxiosInterceptor'
import './UpdatePage.css'
import {v4} from 'uuid'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { imgDB } from '../../Firebase'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UpdatePage = () => {
    const[page,setPage] = useState([])
    const[logoImg,setFile] = useState();
    const[buttonTxt,setBtnTxt] = useState();
    const[title,setTitle] = useState();
    const [open,setOpen] = useState(false);
    const fetchData = async()=>{
        try {
            const res = await authAxios.get('/getpage')
        setPage(res.data)
        setTitle(res.data.title)
        setBtnTxt(res.data.buttonTxt)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    // Update page Details

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setOpen(true)
        try {
            const update = await authAxios.post('/updatepage',logoImg?{title,buttonTxt,logoImg}:{title,buttonTxt})
            setOpen(false)
            alert('Details updates!')

        } catch (error) {
            console.log(error)
        }
    }

    // Handling image
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
                <img className='actimg' src={page.logoImg} alt="" />
            </div>
            <div className="titleupdate">
                <p>Title </p> <span>:</span>
                <div>{page.title}</div>
            </div>
            <div className="btnname">
                <p>Button Text</p><span>:</span>
                <div>{page.buttonTxt}</div>
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