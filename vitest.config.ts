import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './setupTests.ts',
        coverage: {
            provider: 'istanbul', // or 'v8'
        },
    },
});
