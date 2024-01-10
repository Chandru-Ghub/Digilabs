import axios from "axios"

const apiUrl = 'http://localhost:4600/api/'
// const accessToken = localStorage.getItem('shopytoken')
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWU1ZTQ4NWQ5NDE3ZDMxY2UxMzc3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDg3ODc3NH0.sZjSncxOUjk6bwpU10AH37r9rmvxLr-bXXqbAeEim_A'

export const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
        token: `Bearer ${accessToken}`
    }
})
