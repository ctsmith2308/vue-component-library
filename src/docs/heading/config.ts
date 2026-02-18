import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface HeadingProps {
  size: number;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'size',
      type: '1 | 2 | 3 | 4 | 5',
      default: 'undefined',
      description: 'Heading level rendered — maps to h1 through h5 with a corresponding type scale.',
    },
  ] satisfies Array<{ name: keyof HeadingProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const headingSectionConfig: DocSection[] = [
  { id: 'heading-api', label: 'API Reference', component: ApiReference },
  { id: 'heading-scale', label: 'Scale', component: BasicExample },
];

export { apiReferenceConfig, headingSectionConfig };
