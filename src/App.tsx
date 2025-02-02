import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PageLayout } from './layouts/PageLayout.tsx';
import { CharacterPage } from './pages/CharacterPage';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/character/:id' element={<CharacterPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
};
