import type { ComponentRegistry } from '../types';

const mediaRegistry: ComponentRegistry[] = [
  {
    name: 'image',
    path: '/image',
    category: 'Media',
    label: 'Image',
    description: 'Image component with preview functionality and loading states.',
    examplesComponent: () => import('@/features/component-examples/media-examples/image-example.vue'),
  },
];

export { mediaRegistry };
