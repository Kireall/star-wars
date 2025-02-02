import { Button, Form, FormProps, Input } from 'antd';
import React, { useEffect } from 'react';

import { CHARACTER_STORE_NAME } from '../../constants/global.ts';
import { Character } from '../../interfaces/character.interface.ts';

export const CharacteristicsForm: React.FC<{
    data: Character;
    characterId: string;
    onFormSubmit: (values: Character) => void;
}> = ({ data, characterId, onFormSubmit }) => {
    const keys = Object.keys(data) as (keyof Character)[];

    const [form] = Form.useForm<Character>();

    /**
     * После сабмита формы сохраняем обновленные данные в localStorage и закрываем форму
     */
    const onFinish: FormProps<Character>['onFinish'] = (values) => {
        const savedData = JSON.parse(localStorage.getItem(CHARACTER_STORE_NAME)!);

        localStorage.setItem(CHARACTER_STORE_NAME, JSON.stringify({ ...savedData, [characterId]: values }));
        onFormSubmit(values);
    };

    /**
     * Если стора в localStorage еще нет - создаем его при первом открытии формы
     */
    useEffect(() => {
        if (!localStorage.getItem(CHARACTER_STORE_NAME)) {
            localStorage.setItem(CHARACTER_STORE_NAME, JSON.stringify({}));
        }
    }, []);

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
