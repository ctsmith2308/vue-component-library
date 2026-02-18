import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface ToggleSwitchProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  labelPosition?: 'left' | 'right';
}

const apiReferenceConfig = {
  data: [
    { name: 'modelValue', type: 'boolean', default: 'undefined', description: 'Two-way bound value via v-model.' },
    { name: 'label', type: 'string', default: 'undefined', description: 'Text label displayed beside the toggle.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction with the toggle.' },
    { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: 'Visual size of the toggle track and thumb.' },
    { name: 'labelPosition', type: `'left' | 'right'`, default: `'right'`, description: 'Position of the label relative to the toggle.' },
  ] satisfies Array<{ name: keyof ToggleSwitchProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const toggleSwitchSectionConfig: DocSection[] = [
  { id: 'toggle-switch-api', label: 'API Reference', component: ApiReference },
  { id: 'toggle-switch-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, toggleSwitchSectionConfig };