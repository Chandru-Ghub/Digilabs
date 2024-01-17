import axios from "axios"
// https://digilabsbackend.onrender.com/api
const apiUrl = 'http://localhost:4600/api/'
// const accessToken = localStorage.getItem('shopytoken')
const accessToken = localStorage.getItem('modeUItoken')

export const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
        token: `Bearer ${accessToken}`
    }
})
