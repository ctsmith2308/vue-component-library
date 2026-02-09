import type { ComponentRegistry } from '../types';

const navigationRegistry: ComponentRegistry[] = [
  {
    name: 'breadcrumb',
    path: '/breadcrumb',
    category: 'Navigation',
    label: 'Breadcrumb',
    description: 'Breadcrumb description.',
    examplesComponent: () => import('@/features/component-examples/menu-navigation-examples/breadcrumb-example.vue'),
  },
  {
    name: 'menubar',
    path: '/menubar',
    category: 'Navigation',
    label: 'Menubar',
    description: 'Menubar description.',
    examplesComponent: () => import('@/features/component-examples/menu-navigation-examples/menubar-example.vue'),
  },
];

export { navigationRegistry };
