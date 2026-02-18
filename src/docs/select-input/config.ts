import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import WithFormExample from './WithFormExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface SelectInputProps {
  data: {
    id: string;
    name: string;
    label: string;
    options: Array<{ value: string; displayValue: string }>;
  };
}

const apiReferenceConfig = {
  data: [
    { name: 'data.id', type: 'string', default: 'undefined', description: 'HTML id for the hidden native select and ARIA association.' },
    { name: 'data.name', type: 'string', default: 'undefined', description: 'Form field name used for native form submission.' },
    { name: 'data.label', type: 'string', default: 'undefined', description: 'Accessible label (visually hidden).' },
    { name: 'data.options', type: 'Array<{ value: string; displayValue: string }>', default: 'undefined', description: 'Array of selectable options.' },
  ] satisfies Array<{ name: keyof SelectInputProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const selectInputSectionConfig: DocSection[] = [
  { id: 'select-input-api', label: 'API Reference', component: ApiReference },
  { id: 'select-input-basic', label: 'Basic', component: BasicExample },
  { id: 'select-input-form', label: 'With Form', component: WithFormExample },
];

export { apiReferenceConfig, selectInputSectionConfig };