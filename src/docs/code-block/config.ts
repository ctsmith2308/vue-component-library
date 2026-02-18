import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface CodeBlockProps { codeSnippet: string; }

const apiReferenceConfig = {
  data: [
    { name: 'codeSnippet', type: 'string', default: 'undefined', description: 'The code string to display with syntax highlighting.' },
  ] satisfies Array<{ name: keyof CodeBlockProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const codeBlockSectionConfig: DocSection[] = [
  { id: 'code-block-api', label: 'API Reference', component: ApiReference },
  { id: 'code-block-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, codeBlockSectionConfig };