import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import ProgressBarExample from './ProgressBarExample.vue';
import ProgressBarColorsExample from './ProgressBarColorsExample.vue';
import ProgressSpinnerExample from './ProgressSpinnerExample.vue';
import SkeletonExample from './SkeletonExample.vue';

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

interface ProgressSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strokeWidth?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: 'pulse' | 'wave' | 'none';
  shape?: 'rectangle' | 'circle' | 'square';
  size?: string;
}

const progressBarApiConfig = {
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
      description: 'Displays the percentage value below the progress bar.',
    },
    {
      name: 'mode',
      type: `'determinate' | 'indeterminate'`,
      default: `'determinate'`,
      description: 'Sets whether the bar shows a fixed value or continuous animation.',
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

const progressSpinnerApiConfig = {
  data: [
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl'`,
      default: `'md'`,
      description: 'Size of the spinner.',
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
      description: 'Color of the spinner.',
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

const skeletonApiConfig = {
  data: [
    {
      name: 'width',
      type: 'string',
      default: `'100%'`,
      description: 'CSS width for rectangle shape.',
    },
    {
      name: 'height',
      type: 'string',
      default: `'1rem'`,
      description: 'CSS height for rectangle shape.',
    },
    {
      name: 'borderRadius',
      type: 'string',
      default: `'0.375rem'`,
      description: 'Border radius for rectangle and square shapes.',
    },
    {
      name: 'animation',
      type: `'pulse' | 'wave' | 'none'`,
      default: `'pulse'`,
      description: 'Animation style of the skeleton.',
    },
    {
      name: 'shape',
      type: `'rectangle' | 'circle' | 'square'`,
      default: `'rectangle'`,
      description: 'Shape of the skeleton element.',
    },
    {
      name: 'size',
      type: 'string',
      default: 'undefined',
      description: 'Uniform size for circle and square shapes (overrides width/height).',
    },
  ] satisfies Array<{
    name: keyof SkeletonProps | string;
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

const feedbackSectionConfig: DocSection[] = [
  { id: 'feedback-api-ref', label: 'API Reference', component: ApiReference },
  { id: 'feedback-progress-bar', label: 'Progress Bar', component: ProgressBarExample },
  { id: 'feedback-progress-bar-colors', label: 'Progress Bar Colors', component: ProgressBarColorsExample },
  { id: 'feedback-progress-spinner', label: 'Progress Spinner', component: ProgressSpinnerExample },
  { id: 'feedback-skeleton', label: 'Skeleton', component: SkeletonExample },
];

export {
  progressBarApiConfig,
  progressSpinnerApiConfig,
  skeletonApiConfig,
  feedbackSectionConfig,
};
