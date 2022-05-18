import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const App = () => {
    return (
        <Home/>
        // <Routes>
		// 	<Route exact path="/" element={{}} />
		// 	<Route path="*" element={{NotFound}} />
		// </Routes>
    );
}

export { App } ;