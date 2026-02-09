import type { ComponentRegistry } from '../types';

const formRegistry: ComponentRegistry[] = [
  {
    name: 'checkbox-input',
    path: '/checkbox-input',
    category: 'Form',
    label: 'Checkbox Input',
    description: 'Checkbox input component for forms.',
    examplesComponent: () => import('@/features/component-examples/form-examples/checkbox-input-example.vue'),
  },
  {
    name: 'date-picker',
    path: '/date-picker',
    category: 'Form',
    label: 'Date Picker',
    description: 'Calendar date picker component for selecting dates.',
    examplesComponent: () => import('@/features/component-examples/form-examples/date-picker-example.vue'),
  },
  {
    name: 'form',
    path: '/form',
    category: 'Form',
    label: 'Form',
    description: 'Form component with validation and submission handling.',
    examplesComponent: () => import('@/features/component-examples/form-examples/form-example.vue'),
  },
  {
    name: 'radio-input',
    path: '/radio-input',
    category: 'Form',
    label: 'Radio Input',
    description: 'Radio button input component for single selections.',
    examplesComponent: () => import('@/features/component-examples/form-examples/radio-input-example.vue'),
  },
  {
    name: 'select-input',
    path: '/select-input',
    category: 'Form',
    label: 'Select Input',
    description: 'Dropdown select input component.',
    examplesComponent: () => import('@/features/component-examples/form-examples/select-input-example.vue'),
  },
  {
    name: 'text-input',
    path: '/text-input',
    category: 'Form',
    label: 'Text Input',
    description: 'Text input component for forms.',
    examplesComponent: () => import('@/features/component-examples/form-examples/text-input-example.vue'),
  },
  {
    name: 'textarea-input',
    path: '/textarea-input',
    category: 'Form',
    label: 'Textarea Input',
    description: 'Multi-line text input component.',
    examplesComponent: () => import('@/features/component-examples/form-examples/textarea-example.vue'),
  },
  {
    name: 'toggle-switch',
    path: '/toggle-switch',
    category: 'Form',
    label: 'Toggle Switch',
    description: 'Toggle switch component for boolean values.',
    examplesComponent: () => import('@/features/component-examples/form-examples/toggle-switch-example.vue'),
  },
];

export { formRegistry };
