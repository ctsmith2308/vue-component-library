import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import ShapesExample from './ShapesExample.vue';
import CardPlaceholderExample from './CardPlaceholderExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: 'pulse' | 'wave' | 'none';
  shape?: 'rectangle' | 'circle' | 'square';
  size?: string;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'shape',
      type: `'rectangle' | 'circle' | 'square'`,
      default: `'rectangle'`,
      description: 'Shape of the skeleton element.',
    },
    {
      name: 'width',
      type: 'string',
      default: `'100%'`,
      description: 'CSS width — applies to rectangle shape.',
    },
    {
      name: 'height',
      type: 'string',
      default: `'1rem'`,
      description: 'CSS height — applies to rectangle shape.',
    },
    {
      name: 'size',
      type: 'string',
      default: 'undefined',
      description: 'Uniform dimension for circle and square shapes, overrides width/height.',
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
      description: 'Animation style applied to the skeleton.',
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

const skeletonSectionConfig: DocSection[] = [
  { id: 'skeleton-api', label: 'API Reference', component: ApiReference },
  { id: 'skeleton-shapes', label: 'Shapes', component: ShapesExample },
  { id: 'skeleton-card', label: 'Card Placeholder', component: CardPlaceholderExample },
];

export { apiReferenceConfig, skeletonSectionConfig };
