import { Card, Col, Pagination, Row } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';
import { Link } from 'react-router-dom';

import { CHARACTER_STORE_NAME } from '../../constants/global.ts';
import { Character } from '../../interfaces/character.interface.ts';
import { extractIdFromUrl } from '../../utils/string.utils.ts';

export const Grid: React.FC<{
    items: Character[];
    count: number;
    currentPage: number;
    search: string;
    updatePage: (param: number) => void;
    onSearchHandler: (param: string) => void;
}> = ({ items, count, currentPage, search, updatePage, onSearchHandler }) => {
    const storedData = localStorage.getItem(CHARACTER_STORE_NAME);

    const onSearch = (value: string) => {
        updatePage(1);
        onSearchHandler(value);
    };

    return (
        <Row gutter={[24, 24]}>
            <Row gutter={[24, 24]} style={{ width: '100%' }} justify='end'>
                <Col span={4}>
                    <Search
                        placeholder='input search text'
                        allowClear
                        defaultValue={search}
                        onSearch={onSearch}
                        style={{ width: '100%' }}
                    />
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ width: '100%' }}>
                {items.map((person) => {
                    const characterId = extractIdFromUrl(person.url);
                    let updatedData = person;

                    if (storedData) {
                        const newData = JSON.parse(storedData!);

                        if (characterId && newData[characterId]) {
                            updatedData = Object.assign({}, person, newData[characterId]);
                        }
                    }

                    return (
                        <Col
                            span={6}
                            xs={{ span: 24 }}
                            sm={{ span: 12 }}
                            md={{ span: 8 }}
                            lg={{ span: 6 }}
                            key={updatedData.name}
                        >
                            <Card
                                title={updatedData.name}
                                bordered={false}
                                extra={<Link to={`/character/${characterId}`}>Детали</Link>}
                            >
                                <p>Gender: {updatedData.gender}</p>
                                <p>Birth year: {updatedData.birth_year}</p>
                                <p>Height: {updatedData.height}</p>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            {items.length > 0 && (
                <Pagination
                    onChange={(newPageNumber) => {
                        updatePage(newPageNumber);
                        return newPageNumber;
                    }}
                    current={currentPage}
                    total={count}
                    showSizeChanger={false}
                    responsive={true}
                    style={{ margin: 'auto' }}
                />
            )}
        </Row>
    );
};
