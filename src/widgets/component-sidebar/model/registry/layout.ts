import type { ComponentRegistry } from '../types';

const layoutRegistry: ComponentRegistry[] = [
  {
    name: 'accordion',
    path: '/accordion',
    category: 'Layout',
    label: 'Accordion',
    description: 'Collapsible accordion panels for organizing content.',
    examplesComponent: () => import('@/features/component-examples/layout-examples/accordion-example.vue'),
  },
  {
    name: 'carousel',
    path: '/carousel',
    category: 'Layout',
    label: 'Carousel',
    description: 'Carousel component for cycling through content with autoplay.',
    examplesComponent: () => import('@/features/component-examples/layout-examples/carousel-example.vue'),
  },
  {
    name: 'fieldset',
    path: '/fieldset',
    category: 'Layout',
    label: 'Fieldset',
    description: 'Fieldset container with optional toggle functionality.',
    examplesComponent: () => import('@/features/component-examples/layout-examples/fieldset-example.vue'),
  },
  {
    name: 'tabs',
    path: '/tabs',
    category: 'Layout',
    label: 'Tabs',
    description: 'Tabbed content panels for organizing information.',
    examplesComponent: () => import('@/features/component-examples/layout-examples/tabs-example.vue'),
  },
];

export { layoutRegistry };
