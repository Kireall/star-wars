/**
 * Сравниваем 2 объекта и возвращаем новый, состоящий из тех ключей, значения которых отличаются
 * @param obj1
 * @param obj2
 */
export const getDiff = <T extends Record<string, string | string[]>>(obj1: T, obj2: T): Partial<T> => {
    const result: Partial<T> = {};

    for (const key in { ...obj1, ...obj2 }) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // Если оба значения массивы строк, сравниваем их содержимое
        if (
            Array.isArray(val1) &&
            Array.isArray(val2) &&
            val1.every((v) => typeof v === 'string') &&
            val2.every((v) => typeof v === 'string')
        ) {
            if (val1.length !== val2.length || val1.some((v, i) => v !== val2[i])) {
                result[key] = val2;
            }
        }

        // Обычное сравнение для других типов
        else if (val1 !== val2) {
            result[key] = val2;
        }
    }

    return result;
};
