import axios, {AxiosPromise} from 'axios';
import AxiosSWAPIInstance from './axios-swapi';

export const getCharacter = (route: string): AxiosPromise => {
    return axios.get(route);
};