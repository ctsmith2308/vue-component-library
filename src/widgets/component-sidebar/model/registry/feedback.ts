import type { ComponentRegistry } from '../types';

const feedbackRegistry: ComponentRegistry[] = [
  {
    name: 'progress-bar',
    path: '/progressbar',
    category: 'Feedback',
    label: 'Progress Bar',
    description: 'Progress Bar description.',
    examplesComponent: () => import('@/features/component-examples/feedback-examples/progress-bar-example.vue'),
  },
  {
    name: 'progress-spinner',
    path: '/progressspinner',
    category: 'Feedback',
    label: 'Progress Spinner',
    description: 'Progress Spinner description.',
    examplesComponent: () => import('@/features/component-examples/feedback-examples/progress-spinner-example.vue'),
  },
];

export { feedbackRegistry };
