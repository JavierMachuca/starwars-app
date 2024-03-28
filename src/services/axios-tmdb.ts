import axios from 'axios';

const AxiosTMDBInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    responseType: 'json',
});

export default AxiosTMDBInstance;
