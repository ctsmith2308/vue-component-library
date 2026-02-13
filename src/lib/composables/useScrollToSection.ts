import { onMounted } from 'vue';

export interface ScrollToSectionOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  updateUrl?: boolean;
  offset?: number; // For fixed headers
}

const useScrollToSection = (options: ScrollToSectionOptions = {}) => {
  const { behavior = 'smooth', block = 'start', updateUrl = true, offset = 0 } = options;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);

      return;
    }

    // Update URL hash if enabled
    if (updateUrl) {
      history.pushState(null, '', `#${sectionId}`);
    }

    // Handle offset (useful for fixed headers)
    if (offset) {
      const elementPosition = element.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    } else {
      element.scrollIntoView({
        behavior,
        block,
      });
    }
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
