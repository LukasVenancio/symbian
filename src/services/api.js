import axios from 'axios';

const api = axios.create({
    //baseURL: "http://10.107.144.4:3000"
    baseURL: "http://192.168.2.104:3000"
    

})

export default api;