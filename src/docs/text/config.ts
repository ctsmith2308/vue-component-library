import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface TextProps {
  tag?: 'p' | 'div' | 'span' | 'label' | 'section' | 'article';
  size?: 'sm' | 'md' | 'lg';
}

const apiReferenceConfig = {
  data: [
    { name: 'tag', type: `'p' | 'div' | 'span' | 'label' | 'section' | 'article'`, default: `'p'`, description: 'HTML element rendered by the component.' },
    { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'undefined', description: 'Text size variant.' },
  ] satisfies Array<{ name: keyof TextProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const textSectionConfig: DocSection[] = [
  { id: 'text-api', label: 'API Reference', component: ApiReference },
  { id: 'text-basic', label: 'Sizes & Tags', component: BasicExample },
];

export { apiReferenceConfig, textSectionConfig };