import { Character } from '../../interfaces/character.interface.ts';

export interface GetCharactersPayload {
    page: string;
}

export interface GetCharactersResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}
