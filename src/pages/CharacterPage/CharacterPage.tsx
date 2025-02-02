import { Spin, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CharacteristicsForm } from '../../components/CharacteristicsForm';
import { CharacteristicsList } from '../../components/CharacteristicsList';
import { API_URL } from '../../constants/api.ts';
import { CHARACTER_STORE_NAME } from '../../constants/global.ts';
import { ErrorPage } from '../ErrorPage';
import { useQuery } from '@tanstack/react-query';

const { Title } = Typography;
export const CharacterPage: React.FC = () => {
    const { characterId } = useParams();
    const [isEditMode, setIsEditMode] = useState(false);
    const storedData = localStorage.getItem(CHARACTER_STORE_NAME);

    const { isPending, error, data } = useQuery({
        queryKey: ['characterData', characterId],
        queryFn: async () => {
            const url = new URL(`${API_URL}/people/${characterId}`);
            const res = await fetch(url);
            return await res.json();
        },
    });

    /**
     * Если в локалсторадже есть сохраненная информация, то используем ее
     */
    const updatedData = useMemo(() => {
        let savedCharacterData = {};

        if (storedData) {
            const savedData = JSON.parse(storedData!);

            if (characterId && savedData[characterId]) {
                savedCharacterData = savedData[characterId];
            }
        }

        return Object.assign({}, data, savedCharacterData);
    }, [characterId, data, storedData]);

    if (isPending) return <Spin fullscreen={true} spinning={isPending} />;

    if (error) return <ErrorPage />;

    return (
        <>
            <Title>Character Page</Title>
            {isEditMode ? (
                <CharacteristicsForm
                    data={updatedData}
                    characterId={characterId!}
                    onFormSubmit={() => setIsEditMode(false)}
                />
            ) : (
                <CharacteristicsList data={updatedData} onClickHandler={() => setIsEditMode(true)} />
            )}
        </>
    );
};
