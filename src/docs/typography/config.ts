import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import HeadingExample from './HeadingExample.vue';
import TextExample from './TextExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface HeadingProps {
  size: number;
}

interface TextProps {
  tag?: 'p' | 'div' | 'span' | 'label' | 'section' | 'article';
  size?: 'sm' | 'md' | 'lg';
}

const headingApiConfig = {
  data: [
    {
      name: 'size',
      type: '1 | 2 | 3 | 4 | 5',
      default: 'undefined',
      description: 'Heading level. Renders h1 through h5 with the corresponding type scale.',
    },
  ] satisfies Array<{
    name: keyof HeadingProps | string;
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

const textApiConfig = {
  data: [
    {
      name: 'tag',
      type: `'p' | 'div' | 'span' | 'label' | 'section' | 'article'`,
      default: `'p'`,
      description: 'HTML element rendered by the component.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg'`,
      default: 'undefined',
      description: 'Text size variant.',
    },
  ] satisfies Array<{
    name: keyof TextProps | string;
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

const typographySectionConfig: DocSection[] = [
  { id: 'typography-api-ref', label: 'API Reference', component: ApiReference },
  { id: 'typography-heading', label: 'Heading', component: HeadingExample },
  { id: 'typography-text', label: 'Text', component: TextExample },
];

export { headingApiConfig, textApiConfig, typographySectionConfig };
