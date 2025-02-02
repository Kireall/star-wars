import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CharacterPage } from './pages/CharacterPage';
import { HomePage } from './pages/HomePage';

export const AppRoutes: React.FC = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/character/:characterId' element={<CharacterPage />} />
    </Routes>
);
