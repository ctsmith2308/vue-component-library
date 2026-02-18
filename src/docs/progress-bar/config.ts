import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import DeterminateExample from './DeterminateExample.vue';
import IndeterminateExample from './IndeterminateExample.vue';
import ColorsExample from './ColorsExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface ProgressBarProps {
  value?: number;
  showValue?: boolean;
  mode?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  height?: string;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'value',
      type: 'number',
      default: '0',
      description: 'Current progress value between 0 and 100.',
    },
    {
      name: 'showValue',
      type: 'boolean',
      default: 'false',
      description: 'Displays the percentage below the bar.',
    },
    {
      name: 'mode',
      type: `'determinate' | 'indeterminate'`,
      default: `'determinate'`,
      description: 'Controls whether the bar shows a fixed value or animates continuously.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color theme of the progress fill.',
    },
    {
      name: 'height',
      type: 'string',
      default: `'1rem'`,
      description: 'CSS height of the progress track.',
    },
  ] satisfies Array<{
    name: keyof ProgressBarProps | string;
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

const progressBarSectionConfig: DocSection[] = [
  { id: 'progress-bar-api', label: 'API Reference', component: ApiReference },
  { id: 'progress-bar-determinate', label: 'Determinate', component: DeterminateExample },
  { id: 'progress-bar-indeterminate', label: 'Indeterminate', component: IndeterminateExample },
  { id: 'progress-bar-colors', label: 'Colors', component: ColorsExample },
];

export { apiReferenceConfig, progressBarSectionConfig };
