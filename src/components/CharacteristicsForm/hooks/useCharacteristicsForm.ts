import { Form, FormProps } from 'antd';
import { useEffect } from 'react';

import { CHARACTER_STORE_NAME } from '../../../constants/global.ts';
import { Character } from '../../../interfaces/character.interface.ts';
import { getDiff } from '../../../utils/object.utils.ts';

export const useCharacteristicsForm = (
    data: Character,
    characterId: string,
    onFormSubmit: (values: Character) => void
) => {
    const [form] = Form.useForm<Character>();

    /**
     * После сабмита формы сохраняем обновленные данные в localStorage и закрываем форму
     */
    const onFinish: FormProps<Character>['onFinish'] = (values) => {
        const savedData = JSON.parse(localStorage.getItem(CHARACTER_STORE_NAME)!);
        const changedValues = getDiff(data as Partial<Character>, values);

        localStorage.setItem(CHARACTER_STORE_NAME, JSON.stringify({ ...savedData, [characterId]: changedValues }));
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

    return { form, onFinish };
};
