import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import FilmPage from './pages/film.page';
import FilmDetailPage from './pages/film-detail.page';

function App() {
    return (
        <Routes location={'/'}>
            <Route path="/" element={<FilmPage/>}/>
            <Route path="/film/:id" element={<FilmDetailPage/>}/>
        </Routes>
    );
}

export default App;
