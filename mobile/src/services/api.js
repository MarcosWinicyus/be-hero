import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://192.168.0.102:19000'
})

export default api;