import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface TagProps {
  value: string;
  severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  rounded?: boolean;
  icon?: boolean;
}

const apiReferenceConfig = {
  data: [
    { name: 'value', type: 'string', default: 'undefined', description: 'Text content of the tag.' },
    { name: 'severity', type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'`, default: `'primary'`, description: 'Color theme conveying the status or intent.' },
    { name: 'rounded', type: 'boolean', default: 'false', description: 'Renders the tag with fully rounded pill corners.' },
    { name: 'icon', type: 'boolean', default: 'false', description: 'When true renders the icon slot before the label.' },
  ] satisfies Array<{ name: keyof TagProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const tagSectionConfig: DocSection[] = [
  { id: 'tag-api', label: 'API Reference', component: ApiReference },
  { id: 'tag-severity', label: 'Severity', component: BasicExample },
];

export { apiReferenceConfig, tagSectionConfig };