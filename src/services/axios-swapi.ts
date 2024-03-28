import axios from 'axios';

const AxiosSWAPIInstance = axios.create({
    baseURL: `https://swapi.dev/api`,
    responseType: 'json',
});

export default AxiosSWAPIInstance;
