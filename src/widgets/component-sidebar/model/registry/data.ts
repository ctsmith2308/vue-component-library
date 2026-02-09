import type { ComponentRegistry } from '../types';

const dataRegistry: ComponentRegistry[] = [
  {
    name: 'data',
    path: '/data-table',
    category: 'Data',
    label: 'Data Table',
    description: 'Data display description',
    examplesComponent: () => import('@/features/component-examples/data-examples/data-table-example.vue'),
  },
  {
    name: 'paginator',
    path: '/paginator',
    category: 'Data',
    label: 'Paginator',
    description: 'Paginator description.',
    examplesComponent: () => import('@/features/component-examples/data-examples/paginator-example.vue'),
  },
];

export { dataRegistry };
