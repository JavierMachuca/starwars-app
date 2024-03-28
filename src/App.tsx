import React from 'react';
import './App.css';
import {Route, Router, Routes, useLocation} from 'react-router-dom';
import FilmPage from './pages/film.page';
import FilmDetailPage from './pages/film-detail.page';

function App() {

    const customNavigator = {
        createHref: () => '/',
        go: () => {
        },
        push: () => {
        },
        replace: () => {
        }
    };

    return (
        <Routes>
            <Route path="/" element={<FilmPage/>}/>
            <Route path="/film/:id" element={<FilmDetailPage/>}/>
        </Routes>
    );
}

export default App;
