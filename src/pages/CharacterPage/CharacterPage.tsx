import React from 'react';
import { useParams } from 'react-router-dom';

export const CharacterPage: React.FC = () => {
    const { characterId } = useParams();

    return (
        <>
            <h1>Character Page</h1>
            <div>
                Character id: <span>{characterId}</span>
            </div>
        </>
    );
};
