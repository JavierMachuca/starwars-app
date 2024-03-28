import React, {useEffect, useState} from 'react';
import FilmCardComponent from '../components/film-card.component';
import {getFilms} from '../services/films';
import FilmModel from '../models/film.model';
import useCharacterStore from '../stores/character.store';
import CharacterModel from '../models/character.model';
import CharacterCardComponent from '../components/character-card.component';

const FilmPage = () => {
    const characters = useCharacterStore((state) => state.characters);
    const [films, setFilms] = useState<FilmModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFilms()
        .then(value => {
            setFilms(value.data.results.map((value: any) => new FilmModel(value)));
        }).catch(reason => {
            console.error(reason)
        }).finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        console.log(characters)
    }, [characters]);
    return (
        <div className="h-full w-full bg-gray-950">
            <div className="flex h-screen">
                {
                    isLoading ?
                        <div className={'text-white text-xl'}>Cargando...</div> :
                        <div className={'flex-col overflow-y-auto'}>
                            <div
                                className="flex flex-wrap p-8 justify-center items-center gap-x-8 gap-y-8">
                                {
                                    films?.sort((a, b) => a.episode_id - b.episode_id).map((value, index) => (
                                        <FilmCardComponent key={index} film={value}/>
                                    ))
                                }
                            </div>
                            <div className={'flex flex-wrap p-8 justify-center items-center gap-x-8 gap-y-8'}>
                                {
                                    characters.length > 0 && characters.map((character, index) => (
                                        <CharacterCardComponent key={index} character={character}/>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default FilmPage;