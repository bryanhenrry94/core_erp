import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { SingUp } from '../pages/SingUp';
import { NotFound } from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/RecoveryPassword" element={<RecoveryPassword/>} />
                <Route exact path="/SingUp" element={<SingUp/>} />
                <Route exact path="/Home" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export { App } ;