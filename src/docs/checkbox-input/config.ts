import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import WithFormExample from './WithFormExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface CheckboxInputProps {
  data: { id: string; name: string; label: string; value?: string; checked?: boolean };
  modelValue?: boolean;
}

const apiReferenceConfig = {
  data: [
    { name: 'data.id', type: 'string', default: 'undefined', description: 'HTML id linking label to checkbox input.' },
    { name: 'data.name', type: 'string', default: 'undefined', description: 'Form field name.' },
    { name: 'data.label', type: 'string', default: 'undefined', description: 'Visible label text rendered next to the checkbox.' },
    { name: 'data.value', type: 'string', default: 'undefined', description: 'HTML value attribute on the input element.' },
    { name: 'data.checked', type: 'boolean', default: 'false', description: 'Initial checked state when v-model is not used.' },
    { name: 'modelValue', type: 'boolean', default: 'undefined', description: 'Two-way bound value via v-model.' },
  ] satisfies Array<{ name: keyof CheckboxInputProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const checkboxInputSectionConfig: DocSection[] = [
  { id: 'checkbox-input-api', label: 'API Reference', component: ApiReference },
  { id: 'checkbox-input-basic', label: 'Basic', component: BasicExample },
  { id: 'checkbox-input-form', label: 'With Form', component: WithFormExample },
];

export { apiReferenceConfig, checkboxInputSectionConfig };