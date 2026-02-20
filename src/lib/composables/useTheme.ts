import { ref, watch } from 'vue';
import type { ColorPalette, Color } from './types';

const colorPaletteConfig: ColorPalette[] = [
  { tailwindClass: 'bg-blue-500', color: 'blue' },
  { tailwindClass: 'bg-green-500', color: 'green' },
  { tailwindClass: 'bg-yellow-500', color: 'yellow' },
  { tailwindClass: 'bg-orange-500', color: 'orange' },
  { tailwindClass: 'bg-fuchsia-500', color: 'fuchsia' },
];

// Singleton state
const isDark = ref(false);
const colorPalette = ref<Color>('blue');

function useTheme() {
  const syncMode = (dark: boolean) => {
    document.documentElement.setAttribute('data-mode', dark ? 'dark' : 'light');

    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const applyThemePalette = (color: Color) => {
    colorPalette.value = color;

    document.documentElement.setAttribute('data-theme', color);

    localStorage.setItem('themeColor', color);
  };

  const applyCodeTheme = (dark: boolean) => {
    const theme = dark ? 'github-dark-dimmed' : 'github';

    const existing = document.getElementById('hljs-theme') as HTMLLinkElement | null;

    const href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/${theme}.min.css`;

    if (existing) {
      existing.href = href;
    } else {
      const link = document.createElement('link');
      link.id = 'hljs-theme';
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  };

  watch(isDark, (dark) => {
    syncMode(dark);

    applyCodeTheme(dark);
  });

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    const savedColor = localStorage.getItem('themeColor') as Color | null;

    applyThemePalette(savedColor ?? 'blue');

    isDark.value = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

    syncMode(isDark.value);

    applyCodeTheme(isDark.value);
  };

  const toggleTheme = () => {
    const apply = () => {
      isDark.value = !isDark.value;
    };

    if (!document.startViewTransition) {
      apply();
      return;
    }

    document.startViewTransition(apply);
  };

  return {
    isDark,
    colorPalette,
    colorPaletteConfig,
    initializeTheme,
    toggleTheme,
    applyThemePalette,
  };
}

export { useTheme };
