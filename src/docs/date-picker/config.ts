import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import WithFormExample from './WithFormExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface DatePickerProps {
  modelValue?: Date | null;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const apiReferenceConfig = {
  data: [
    { name: 'modelValue', type: 'Date | null', default: 'undefined', description: 'Two-way bound Date value via v-model.' },
    { name: 'placeholder', type: 'string', default: `'Select date'`, description: 'Placeholder shown when no date is selected.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents the calendar from opening.' },
    { name: 'minDate', type: 'Date', default: 'undefined', description: 'Earliest selectable date.' },
    { name: 'maxDate', type: 'Date', default: 'undefined', description: 'Latest selectable date.' },
  ] satisfies Array<{ name: keyof DatePickerProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const datePickerSectionConfig: DocSection[] = [
  { id: 'date-picker-api', label: 'API Reference', component: ApiReference },
  { id: 'date-picker-basic', label: 'Basic', component: BasicExample },
  { id: 'date-picker-form', label: 'With Form', component: WithFormExample },
];

export { apiReferenceConfig, datePickerSectionConfig };