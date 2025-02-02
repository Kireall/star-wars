import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PageLayout } from './layouts/PageLayout.tsx';
import { CharacterPage } from './pages/CharacterPage';
import { HomePage } from './pages/HomePage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const App: React.FC = () => {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='/character/:characterId' element={<CharacterPage />} />
                </Routes>

                <ReactQueryDevtools initialIsOpen={false} />
            </PageLayout>
        </Router>
    );
};
