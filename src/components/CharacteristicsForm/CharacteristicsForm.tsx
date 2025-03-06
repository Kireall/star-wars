import { Button, Form, Input } from 'antd';
import React from 'react';

import { Character } from '../../interfaces/character.interface.ts';
import { useCharacteristicsForm } from './hooks/useCharacteristicsForm.ts';

export const CharacteristicsForm: React.FC<{
    data: Character;
    characterId: string;
    onFormSubmit: (values: Character) => void;
}> = ({ data, characterId, onFormSubmit }) => {
    const keys = Object.keys(data) as (keyof Character)[];
    const { form, onFinish } = useCharacteristicsForm(data, characterId, onFormSubmit);

    return (
        <div>
            <Form layout='vertical' form={form} initialValues={data} style={{ maxWidth: 600 }} onFinish={onFinish}>
                {keys.map((item) => (
                    <Form.Item label={item.toString()} name={item} key={item}>
                        <Input placeholder={`Input ${item.toString()}`} />
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
