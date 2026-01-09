import axios, {CanceledError} from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '31c35b0cb1fc4dc3a2502247c0b89b99'
    },
})

export {CanceledError}