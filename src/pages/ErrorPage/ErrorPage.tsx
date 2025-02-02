import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.trace(error);

    return (
        <div>
            <h1>Ошибка</h1>
            <p>Ой! Что-то пошло не так.</p>
        </div>
    );
};
