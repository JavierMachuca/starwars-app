import React, {useEffect, useState} from 'react';
import FilmCardComponent from '../components/film-card/film-card.component';
import {getFilms} from '../services/films';
import FilmModel from '../models/film.model';

const FilmPage = () => {
    const [films, setFilms] = useState<FilmModel[]>()

    useEffect(() => {
        getFilms()
        .then(value => {
            setFilms(value.data.results.map((value: any) => new FilmModel(value)));
        }).catch(reason => {
            console.error(reason)
        });
    }, []);


    return (
        <div className="h-full w-full bg-gray-950">
            <div className="flex h-screen">
                <div className="flex flex-wrap p-8 justify-center items-center overflow-y-auto gap-x-8 gap-y-8">
                    {
                        films?.sort((a, b) => a.episode_id - b.episode_id).map((value, index) => (
                            <FilmCardComponent key={index} film={value}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FilmPage;