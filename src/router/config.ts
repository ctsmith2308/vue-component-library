import type { DocRoute, CategoryGroup, ComponentItem } from './types';

const docRoutesConfig: DocRoute[] = [
  {
    name: 'button',
    label: 'Button',
    category: 'Button',
    component: () => import('@/docs/button/index.vue'),
  },

  // ── Form ────────────────────────────────────────────────────────────────────
  {
    name: 'password-input',
    label: 'PasswordInput',
    category: 'Form',
    component: () => import('@/docs/password-input/index.vue'),
  },
  {
    name: 'text-input',
    label: 'TextInput',
    category: 'Form',
    component: () => import('@/docs/text-input/index.vue'),
  },

  // ── Layout ──────────────────────────────────────────────────────────────────
  {
    name: 'accordion',
    label: 'Accordion',
    category: 'Layout',
    component: () => import('@/docs/accordion/index.vue'),
  },
  {
    name: 'carousel',
    label: 'Carousel',
    category: 'Layout',
    component: () => import('@/docs/carousel/index.vue'),
  },
  {
    name: 'tabs',
    label: 'Tabs',
    category: 'Layout',
    component: () => import('@/docs/tabs/index.vue'),
  },

  // ── Select ──────────────────────────────────────────────────────────────────
  {
    name: 'checkbox-input',
    label: 'CheckboxInput',
    category: 'Select',
    component: () => import('@/docs/checkbox-input/index.vue'),
  },
  {
    name: 'date-picker',
    label: 'DatePicker',
    category: 'Select',
    component: () => import('@/docs/date-picker/index.vue'),
  },
  {
    name: 'radio-input',
    label: 'RadioInput',
    category: 'Select',
    component: () => import('@/docs/radio-input/index.vue'),
  },
  {
    name: 'select-input',
    label: 'SelectInput',
    category: 'Select',
    component: () => import('@/docs/select-input/index.vue'),
  },

  // ── Typography ──────────────────────────────────────────────────────────────
  {
    name: 'heading',
    label: 'Heading',
    category: 'Typography',
    component: () => import('@/docs/heading/index.vue'),
  },
  {
    name: 'text',
    label: 'Text',
    category: 'Typography',
    component: () => import('@/docs/text/index.vue'),
  },

  // ── Data ────────────────────────────────────────────────────────────────────
  {
    name: 'data-table',
    label: 'DataTable',
    category: 'Data',
    component: () => import('@/docs/data-table/index.vue'),
  },
  {
    name: 'paginator',
    label: 'Paginator',
    category: 'Data',
    component: () => import('@/docs/paginator/index.vue'),
  },

  // ── Feedback ────────────────────────────────────────────────────────────────
  {
    name: 'progress-bar',
    label: 'ProgressBar',
    category: 'Feedback',
    component: () => import('@/docs/progress-bar/index.vue'),
  },
  {
    name: 'progress-spinner',
    label: 'ProgressSpinner',
    category: 'Feedback',
    component: () => import('@/docs/progress-spinner/index.vue'),
  },
  {
    name: 'skeleton',
    label: 'Skeleton',
    category: 'Feedback',
    component: () => import('@/docs/skeleton/index.vue'),
  },

  // ── Media ───────────────────────────────────────────────────────────────────
  {
    name: 'image',
    label: 'Image',
    category: 'Media',
    component: () => import('@/docs/image/index.vue'),
  },

  // ── Misc ────────────────────────────────────────────────────────────────────
  {
    name: 'avatar',
    label: 'Avatar',
    category: 'Misc',
    component: () => import('@/docs/avatar/index.vue'),
  },
  {
    name: 'chip',
    label: 'Chip',
    category: 'Misc',
    component: () => import('@/docs/chip/index.vue'),
  },
  {
    name: 'code-block',
    label: 'CodeBlock',
    category: 'Misc',
    component: () => import('@/docs/code-block/index.vue'),
  },
  {
    name: 'tag',
    label: 'Tag',
    category: 'Misc',
    component: () => import('@/docs/tag/index.vue'),
  },
  {
    name: 'toggle-switch',
    label: 'ToggleSwitch',
    category: 'Misc',
    component: () => import('@/docs/toggle-switch/index.vue'),
  },
];

// Helper function to organize routes by category
function organizeRoutesByCategory(routes: DocRoute[]): CategoryGroup[] {
  const categoryMap = new Map<string, ComponentItem[]>();

  // Group routes by category
  routes.forEach((route) => {
    if (!categoryMap.has(route.category)) {
      categoryMap.set(route.category, []);
    }
    categoryMap.get(route.category)!.push({
      name: route.name,
      label: route.label,
    });
  });

  // Convert map to array and sort categories alphabetically
  return Array.from(categoryMap.entries())
    .map(([category, components]) => ({
      category,
      components,
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
}

export { docRoutesConfig, organizeRoutesByCategory };
