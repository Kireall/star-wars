import { Button, List, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../interfaces/character.interface.ts';
import { isUrl } from '../../utils/string.utils.ts';

const { Title } = Typography;
export const CharacteristicsList: React.FC<{ data: Character; onClickHandler: () => void }> = ({
    data,
    onClickHandler,
}) => {
    const keys: (keyof Character)[] = Object.keys(data).filter((item): item is keyof Character => item !== 'name');

    return (
        <List
            size='large'
            header={<Title level={3}>{data.name}</Title>}
            footer={
                <Button type='primary' onClick={onClickHandler}>
                    Edit
                </Button>
            }
            bordered
            dataSource={keys}
            renderItem={(item) => {
                let text: string | React.ReactElement = `${item}: ${data[item]}`;

                /**
                 * @todo: В задании про этот момент ничего не сказано. Поэтому пока просто отображаю, как ссылку
                 */
                if (typeof data[item] === 'object') {
                    if (!data[item].length) return;

                    return (
                        <List.Item key={item}>
                            {item}:{' '}
                            {data[item].map((link: string) => (
                                <React.Fragment key={link}>
                                    <Link to={link}>link</Link>&nbsp;
                                </React.Fragment>
                            ))}
                        </List.Item>
                    );
                }

                if (isUrl(data[item])) {
                    text = (
                        <div>
                            {item}: <Link to={data[item]}>link</Link>
                        </div>
                    );
                }

                return <List.Item key={item}>{text}</List.Item>;
            }}
        />
    );
};
