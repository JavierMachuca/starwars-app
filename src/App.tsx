import React, {useEffect, useState} from 'react';
import './App.css';
import {getFilms} from './services/films';
import FilmCardComponent from './components/FilmCard.component';
import Film from './models/Film';

function App() {
    const [films, setFilms] = useState<Film[]>()

    useEffect(() => {
        getFilms()
        .then(value => {
            setFilms(value.data.results.map((value: any) => new Film(value)));
        }).catch(reason => {
            console.error(reason)
        });
    }, []);

    return (
        <div className="h-full w-full bg-gray-500">
            <div className="grid grid-cols-2 gap-4 p-20">
                {
                    films?.map((value, index) => (
                        <FilmCardComponent key={index} film={value}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
