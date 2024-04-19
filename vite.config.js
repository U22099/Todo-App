import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(
    {
        build:{
            outDir: 'dist',
        },
        plugins: [
            tsconfigPaths(),
        ],
        base:'/Todo-App/'
    }
)