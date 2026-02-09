import type { ComponentRegistry } from '../types';

const buttonRegistry: ComponentRegistry[] = [
  {
    name: 'button',
    path: '/button',
    label: 'Button',
    category: 'Button',
    description: 'Various button styles, colors and themes.',
    examplesComponent: () => import('@/features/component-examples/button-examples/index.vue'),
  },
];

export { buttonRegistry };
