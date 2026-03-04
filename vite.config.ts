import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const vueVitePluginOptions = {
  template: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'selectedcontent',
    },
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(vueVitePluginOptions),
    tailwindcss(),
    dts({
      // Ensures types are generated for your .vue files
      tsconfigPath: './tsconfig.app.json',
      // Merges declarations into a single file per entry if desired
      rollupTypes: true,
      // Clean up old types before a new build
      insertTypesEntry: true,
      // Exclude type declarations from tests and stories
      exclude: ['**/__tests__/**', '**/*.stories.ts', '**/*.stories.vue', '**/.storybook/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        'maven-vue-lib': resolve(__dirname, 'src/blocks/index.ts'),
      },
      cssFileName: 'maven-vue-lib-styles',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss', /\.stories\./, /\.storybook\//],
      output: {
        globals: {
          vue: 'Vue',
        },
        manualChunks: undefined,
      },
    },
    minify: 'esbuild',
  },
});
