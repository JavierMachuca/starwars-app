import {AxiosPromise} from 'axios';
import AxiosSWAPIInstance from './axios';

export const getFilms = (): AxiosPromise => {
    return AxiosSWAPIInstance.get(`/films`);
};

export const getFilmImage = (title: string): AxiosPromise => {
    return AxiosSWAPIInstance.get(`/films`);
};