import axios from "axios"

const apiUrl = 'https://digilabsbackend.onrender.com/api/'
// const accessToken = localStorage.getItem('shopytoken')
const accessToken = localStorage.getItem('modeUItoken')

export const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
        token: `Bearer ${accessToken}`
    }
})
