import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// import vueDevTools from 'vite-plugin-vue-devtools';

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
    // vueDevTools() <-- This conflicts with storybook, need to investigate.
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/widgets': fileURLToPath(new URL('./src/components/widgets', import.meta.url)),
    },
  },
});
