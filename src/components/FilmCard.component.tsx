import React from 'react';
import Film from '../models/Film';

interface IFilmCardProps {
    film: Film
}

const FilmCardComponent = ({film}: IFilmCardProps) => {

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-40 object-cover object-center" src="https://picsum.photos/seed/picsum/600/400" alt="Imagen de ejemplo"/>
                <div className="p-4 h-52">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{film.title}</h2>
                    <div className="overflow-hidden">
                        <p className="text-gray-700 max-h-32 overflow-y-auto">{film.opening_crawl}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmCardComponent;