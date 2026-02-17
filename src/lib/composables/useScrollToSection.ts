import { onMounted } from 'vue';

import type { ScrollToSectionOptions } from './types';

const useScrollToSection = (options: ScrollToSectionOptions = {}) => {
  const { behavior = 'smooth', block = 'start', updateUrl = true } = options;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    // Update URL hash if enabled
    if (updateUrl) {
      history.pushState(null, '', `#${sectionId}`);
    }

    element.scrollIntoView({
      behavior,
      block,
    });
  };

  // Handle initial hash on mount
  onMounted(() => {
    const hash = window.location.hash.slice(1);

    if (hash) {
      // Delay to ensure DOM is ready
      setTimeout(() => scrollToSection(hash), 100);
    }
  });

  return {
    scrollToSection,
  };
};

export { useScrollToSection };
