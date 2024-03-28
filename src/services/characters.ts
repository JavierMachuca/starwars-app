import axios, {AxiosPromise} from 'axios';

export const getCharacter = (route: string): AxiosPromise => {
    return axios.get(route);
};