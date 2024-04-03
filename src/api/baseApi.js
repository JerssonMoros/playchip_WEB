
import axios from 'axios'


const authApi = axios.create({
    baseURL: process.env.VUE_APP_RUTA_API,
    // params: {
    //     key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    // }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


