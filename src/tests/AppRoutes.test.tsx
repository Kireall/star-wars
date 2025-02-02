import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { AppRoutes } from '../AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

// Создаем клиент для тестов
const queryClient = new QueryClient();

vi.mock('../pages/HomePage', () => ({
    HomePage: () => <div>Home Page</div>,
}));

vi.mock('../pages/CharacterPage', () => ({
    CharacterPage: () => <div>Character Page</div>,
}));

const renderWithProviders = (ui: React.ReactNode, initialRoute: string) => {
    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={[initialRoute]}>{ui}</MemoryRouter>
        </QueryClientProvider>
    );
};

describe('AppRoutes with react-query', () => {
    it('Показываем HomePage при переходе на /', () => {
        renderWithProviders(<AppRoutes />, '/');
        expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    it('Показываем CharacterPage при переходе на /character/:characterId', () => {
        renderWithProviders(<AppRoutes />, '/character/1');
        expect(screen.getByText('Character Page')).toBeInTheDocument();
    });
});
