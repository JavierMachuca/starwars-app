import React, {useEffect, useState} from 'react';
import FilmModel from '../models/film.model';
import {useNavigate} from 'react-router-dom';
import {getMovieImage} from '../services/tmdb';
import useCharacterStore from '../stores/character.store';
import {getCharacter} from '../services/characters';
import CharacterModel from '../models/character.model';

interface IFilmCardProps {
    film: FilmModel
}

const FilmCardComponent = ({film}: IFilmCardProps) => {
    const addCharacters = useCharacterStore((state) => state.addCharacters)
    const setLoading = useCharacterStore((state) => state.setLoading)
    const isLoading = useCharacterStore((state) => state.isLoading)

    const navigate = useNavigate();
    const [image, setImage] = useState<String>('');
    const [characters, setCharacters] = useState<CharacterModel[] | null>([]);

    useEffect(() => {
        getMovieImage(`Star Wars: ${film.title}`)
        .then((value: any) => {
            const movieImage = value?.data?.poster_path
                ? `https://image.tmdb.org/t/p/w300${value?.data?.poster_path}`
                : '';
            setImage(movieImage)
        }).catch(reason => {
            console.error('reason', reason);
        })
    }, [film]);

    useEffect(() => {
        if (characters && characters.length > 0 && !isLoading) {
            addCharacters(characters)
        }
    }, [characters, isLoading]);

    const handleOnClick = () => {
        setLoading(true)
        getCharacters();
        //navigate(`/film/${film.episode_id}`);
    };

    const getCharacters = () => {
        setLoading(true);
        const promises = film.characters.map((path: string) => {
            return getCharacter(path)
            .then(response => new CharacterModel(response.data))
            .catch(reason => {
                console.error('error', reason)
                return null;
            });
        });

        Promise.all(promises)
        .then(charactersArray    => {
            setCharacters(charactersArray.filter(character => character !== null) as CharacterModel[]);
            setLoading(false);
        });
    }


    return (
        <div className="lg:w-1/3 md:w-1/2 sm:w-full  bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="md:flex px-4 pt-4">
                <div className="max-w-1/2 aspect-h-3">
                    <img className="w-full object-cover" src={`${image}`}
                         alt="Imagen de la película"/>
                </div>
                <div className="px-4 w-1/2">
                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                        {film.title}
                    </div>
                    <div className="tracking-wide text-sm text-indigo-500 font-semibold mt-4">
                        Fecha de emisión
                    </div>
                    <p className="mt-1 text-white text-sm">{film.release_date}</p>

                    <div className=" tracking-wide text-sm text-indigo-500 font-semibold mt-4">
                        Director(es)
                    </div>
                    <p className="mt-1 text-white text-sm">{film.director}</p>

                    <div className=" tracking-wide text-sm text-indigo-500 font-semibold mt-4">
                        Episodio
                    </div>
                    <p className="mt-1 text-white text-sm">{film.episode_id}</p>

                    <div className=" tracking-wide text-sm text-indigo-500 font-semibold mt-4">
                        Productor(es)
                    </div>
                    <p className="mt-1 text-white text-sm">{film.producer}</p>
                </div>
            </div>
            <div className={'p-4'}>
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">
                    Resumen:
                </div>
                <p className="mt-1 text-white text-sm">{film.opening_crawl}</p>
            </div>
            <div className={'flex p-4 space-x-2 justify-around text-white cursor-pointer'}>
                <div onClick={handleOnClick} className="underline font-bold text-xs">Ver Detalle</div>
            </div>
        </div>
    )
}

export default FilmCardComponent;