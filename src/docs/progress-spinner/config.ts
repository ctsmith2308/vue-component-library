import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import SizesExample from './SizesExample.vue';
import ColorsExample from './ColorsExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface ProgressSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strokeWidth?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const apiReferenceConfig = {
  data: [
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl'`,
      default: `'md'`,
      description: 'Controls the width and height of the spinner.',
    },
    {
      name: 'strokeWidth',
      type: 'string',
      default: `'4'`,
      description: 'SVG stroke width of the spinner circle.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color of the spinning arc.',
    },
  ] satisfies Array<{
    name: keyof ProgressSpinnerProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const progressSpinnerSectionConfig: DocSection[] = [
  { id: 'progress-spinner-api', label: 'API Reference', component: ApiReference },
  { id: 'progress-spinner-sizes', label: 'Sizes', component: SizesExample },
  { id: 'progress-spinner-colors', label: 'Colors', component: ColorsExample },
];

export { apiReferenceConfig, progressSpinnerSectionConfig };
