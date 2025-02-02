import { Spin, Typography } from 'antd';
import React, { useState } from 'react';

import { Grid } from '../../components/Grid';
import { API_URL } from '../../constants/api.ts';
import { ErrorPage } from '../ErrorPage';
import { useQuery } from '@tanstack/react-query';

const { Title } = Typography;
export const HomePage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const { isPending, error, data } = useQuery({
        queryKey: ['charactersData', page, search],
        queryFn: async () => {
            const url = new URL(`${API_URL}/people`);
            url.searchParams.set('page', `${page}`);
            if (search) {
                url.searchParams.set('search', `${search}`);
            }
            const res = await fetch(url);
            return await res.json();
        },
    });

    if (error) return <ErrorPage />;

    return (
        <>
            <Title>Star Wars Guide</Title>
            {data && (
                <Grid
                    items={data.results}
                    count={data.count}
                    currentPage={page}
                    updatePage={setPage}
                    onSearchHandler={setSearch}
                    search={search}
                />
            )}
            {isPending && <Spin fullscreen={true} spinning={isPending} />}
        </>
    );
};
