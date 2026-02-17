import { ref, watch } from 'vue';

function useTheme() {
  const isDark = ref(false);

  const syncTheme = (val: unknown) => {
    const theme = val ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  };

  watch(isDark, (val) => syncTheme(val));

  const initializeTheme = () => {
    const saved = localStorage.getItem('theme');

    if (saved) {
      isDark.value = saved === 'dark';
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    syncTheme(isDark.value);

    setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
    }, 100);
  };

  const toggleTheme = () => (isDark.value = !isDark.value);

  return {
    isDark,
    toggleTheme,
    initializeTheme,
  };
}

export { useTheme };
