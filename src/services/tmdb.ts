import {AxiosPromise} from 'axios';
import AxiosTMDBInstance from './axios-tmdb';

const API_KEY = 'a4f43d4b38cc27ca4633b1661b7e6e23';

const getMovie = (query: string): AxiosPromise => {
    return AxiosTMDBInstance.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMovieImage = (query: string) => {
    return new Promise((resolve, reject) => {
        getMovie(query)
        .then(value => {
            if (value.data.results.length > 0) {
                resolve(AxiosTMDBInstance.get(`/movie/${value.data.results[0].id}?api_key=${API_KEY}`));
            } else {
                reject(new Error("No se encontraron resultados de películas"));
            }
        })
        .catch(reason => {
            reject(reason);
        });
    });
};
