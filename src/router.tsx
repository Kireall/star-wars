import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { BASE_URL } from './constants/global.ts';
import { ErrorPage } from './pages';
import { CharacterPage } from './pages/CharacterPage';

export const router = createBrowserRouter([
    {
        path: `${BASE_URL}/character/:characterId`,
        element: <CharacterPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: `${BASE_URL}`,
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);
