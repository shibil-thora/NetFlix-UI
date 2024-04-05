import axios from 'axios'; 
import { baseURL } from './Credentials/Credentials';


const instance = axios.create({
    baseURL: baseURL,
   });

export default instance 
