/**
 * Вытаскиваем из переданной ссылки id
 *
 * @param url
 * @return number | null
 */
export const extractIdFromUrl = (url: string): number | null => {
    const match = url.match(/\/(\d+)\/$/);

    if (match && match[1]) {
        return parseInt(match[1], 10);
    }

    return null;
};

/**
 * Проверяем является ли переданная строка ссылкой
 *
 * @param str
 * @return boolean
 */
export const isUrl = (str: string): boolean => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    return urlPattern.test(str);
};
