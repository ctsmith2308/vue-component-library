import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import RemovableExample from './RemovableExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface ChipProps {
  label: string;
  removable?: boolean;
  icon?: boolean;
  image?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const apiReferenceConfig = {
  data: [
    { name: 'label', type: 'string', default: 'undefined', description: 'Text displayed inside the chip.' },
    { name: 'color', type: `'primary' | 'secondary' | 'success' | 'danger'`, default: `'primary'`, description: 'Color theme of the chip.' },
    { name: 'removable', type: 'boolean', default: 'false', description: 'Shows a remove/close button on the chip.' },
    { name: 'icon', type: 'boolean', default: 'false', description: 'When true renders the icon slot before the label.' },
    { name: 'image', type: 'string', default: 'undefined', description: 'URL of an image shown before the label.' },
  ] satisfies Array<{ name: keyof ChipProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const chipSectionConfig: DocSection[] = [
  { id: 'chip-api', label: 'API Reference', component: ApiReference },
  { id: 'chip-colors', label: 'Colors', component: BasicExample },
  { id: 'chip-removable', label: 'Removable', component: RemovableExample },
];

export { apiReferenceConfig, chipSectionConfig };