import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
const App = () => {
    return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Knowledges" element={<Knowledges/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/NotFound" element={<NotFound/>}></Route>
            
         </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;

