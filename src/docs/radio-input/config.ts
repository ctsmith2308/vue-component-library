import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import WithFormExample from './WithFormExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface RadioInputProps {
  input: { id: string; groupName: string; label: string; value: string };
}

const apiReferenceConfig = {
  data: [
    { name: 'input.id', type: 'string', default: 'undefined', description: 'Unique HTML id for the radio input and its label.' },
    { name: 'input.groupName', type: 'string', default: 'undefined', description: 'Shared name attribute grouping radio buttons together.' },
    { name: 'input.label', type: 'string', default: 'undefined', description: 'Visible label text for this radio option.' },
    { name: 'input.value', type: 'string', default: 'undefined', description: 'Value submitted when this radio option is selected.' },
  ] satisfies Array<{ name: keyof RadioInputProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const radioInputSectionConfig: DocSection[] = [
  { id: 'radio-input-api', label: 'API Reference', component: ApiReference },
  { id: 'radio-input-basic', label: 'Basic', component: BasicExample },
  { id: 'radio-input-form', label: 'With Form', component: WithFormExample },
];

export { apiReferenceConfig, radioInputSectionConfig };