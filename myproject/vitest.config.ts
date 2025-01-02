import { defineVitestConfig } from '@nuxt/test-utils/config';
import { coverageConfigDefaults } from 'vitest/config';

export default defineVitestConfig({
    test: {
        // root: 'src/',
        environment: 'nuxt',
        globals: true,
        coverage: {
            exclude: [
                ...coverageConfigDefaults.exclude,
                'nuxt.config.ts',
            ],
        },
    },
});