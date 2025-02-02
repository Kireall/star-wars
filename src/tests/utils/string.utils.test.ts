import { describe, expect, it } from 'vitest';

import { extractIdFromUrl, isUrl } from '../../utils/string.utils.ts';

describe('extractIdFromUrl', () => {
    it('Получаем id из валидной ссылки', () => {
        expect(extractIdFromUrl('https://swapi.dev/api/people/2/')).toBe(2);
        expect(extractIdFromUrl('https://example.com/items/42/')).toBe(42);
    });

    it('Получаем null если ссылка не содержит id', () => {
        expect(extractIdFromUrl('https://swapi.dev/api/people/')).toBeNull();
        expect(extractIdFromUrl('https://example.com/items/')).toBeNull();
    });

    it('Получаем null если передана невалидная строка', () => {
        expect(extractIdFromUrl('not-a-url')).toBeNull();
        expect(extractIdFromUrl('')).toBeNull();
    });

    it('Получаем id если url содержит несколько чисел', () => {
        expect(extractIdFromUrl('https://example.com/items/123/details/456/')).toBe(456);
    });
});

describe('isUrl', () => {
    it('Получаем true для валидных url', () => {
        expect(isUrl('https://www.google.com')).toBe(true);
        expect(isUrl('http://example.com')).toBe(true);
        expect(isUrl('www.example.com')).toBe(true);
        expect(isUrl('example.com')).toBe(true);
        expect(isUrl('https://example.com/path/to/page')).toBe(true);
    });

    it('Получаем false для невалидных url', () => {
        expect(isUrl('ftp://example.com')).toBe(false);
        expect(isUrl('not-a-url')).toBe(false);
        expect(isUrl('')).toBe(false);
    });
});
