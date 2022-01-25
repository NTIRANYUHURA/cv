import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Competences from './pages/Competences';
import Notfound from './pages/Notfound';
const App = () => {
    return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Accueil/>}></Route>
            <Route path="/Competences" element={<Competences/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Notfound" element={<Notfound/>}></Route>
            
         </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;

