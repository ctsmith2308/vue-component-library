import { computed } from 'vue';

import type { ExampleSection } from './types';

function useDocSections(sections: ExampleSection[]) {
  const sectionIds = computed(() => sections.map((s) => s.id));
  const sectionLabels = computed(() => sections.map((s) => s.label));

  return {
    sections,
    sectionIds,
    sectionLabels,
  };
}

export { useDocSections };
