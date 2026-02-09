import type { ComponentRegistry } from '../types';

const miscRegistry: ComponentRegistry[] = [
  {
    name: 'avatar',
    path: '/avatar',
    category: 'Misc',
    label: 'Avatar',
    description: 'Avatar component for displaying user images, icons, or initials.',
    examplesComponent: () => import('@/features/component-examples/misc-examples/avatar-example.vue'),
  },
  {
    name: 'chip',
    path: '/chip',
    category: 'Misc',
    label: 'Chip',
    description: 'Chip component for tags and removable items.',
    examplesComponent: () => import('@/features/component-examples/misc-examples/chip-example.vue'),
  },
];

export { miscRegistry };
