import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '31c35b0cb1fc4dc3a2502247c0b89b99'
    },
})



class ApiClient{

    constructor(endpoint){
        this.endpoint = endpoint;
    }

    getAll = ( requestCOnfig = {}) =>{
        return axiosInstance.get(this.endpoint, {
            ...requestCOnfig
        })
            .then(res => res.data);
    }
}

export default ApiClient;