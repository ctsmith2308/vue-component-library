import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

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
      exclude: ['src/**/*.stories.ts', 'src/**/*.stories.js', 'src/**/*.stories.vue', '.storybook/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/blocks/index.ts'),
      name: 'MavenComponentLibrary',
      fileName: 'maven-component-lib',
      cssFileName: 'maven-styles.css',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', /\.stories\.(ts|js|vue)$/, /\.storybook\//],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: true,
  },
});
