import {AxiosPromise} from 'axios';
import AxiosSWAPIInstance from './axios-swapi';

export const getFilms = (): AxiosPromise => {
    return AxiosSWAPIInstance.get(`/films`);
};