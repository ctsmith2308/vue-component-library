import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import SelectInputExample from './SelectInputExample.vue';
import SelectInputWithFormExample from './SelectInputWithFormExample.vue';
import CheckboxInputExample from './CheckboxInputExample.vue';
import CheckboxInputWithFormExample from './CheckboxInputWithFormExample.vue';
import RadioInputExample from './RadioInputExample.vue';
import RadioInputWithFormExample from './RadioInputWithFormExample.vue';
import DatePickerExample from './DatePickerExample.vue';
import DatePickerWithFormExample from './DatePickerWithFormExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface SelectInputProps {
  data: {
    id: string;
    name: string;
    label: string;
    options: Array<{ value: string; displayValue: string }>;
  };
}

interface CheckboxInputProps {
  data: {
    id: string;
    name: string;
    label: string;
    value?: string;
    checked?: boolean;
  };
  modelValue?: boolean;
}

interface RadioInputProps {
  input: {
    id: string;
    groupName: string;
    label: string;
    value: string;
  };
}

interface DatePickerProps {
  modelValue?: Date | null;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const selectInputApiConfig = {
  data: [
    {
      name: 'data.id',
      type: 'string',
      default: 'undefined',
      description: 'HTML id for the hidden native select and ARIA association.',
    },
    {
      name: 'data.name',
      type: 'string',
      default: 'undefined',
      description: 'Form field name used for native form submission.',
    },
    {
      name: 'data.label',
      type: 'string',
      default: 'undefined',
      description: 'Accessible label for the select element (visually hidden).',
    },
    {
      name: 'data.options',
      type: 'Array<{ value: string; displayValue: string }>',
      default: 'undefined',
      description: 'Array of selectable options.',
    },
  ] satisfies Array<{
    name: keyof SelectInputProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const checkboxInputApiConfig = {
  data: [
    {
      name: 'data.id',
      type: 'string',
      default: 'undefined',
      description: 'HTML id linking label to checkbox input.',
    },
    {
      name: 'data.name',
      type: 'string',
      default: 'undefined',
      description: 'Form field name.',
    },
    {
      name: 'data.label',
      type: 'string',
      default: 'undefined',
      description: 'Visible label text rendered next to the checkbox.',
    },
    {
      name: 'data.value',
      type: 'string',
      default: 'undefined',
      description: 'HTML value attribute on the input element.',
    },
    {
      name: 'data.checked',
      type: 'boolean',
      default: 'false',
      description: 'Initial checked state when v-model is not used.',
    },
    {
      name: 'modelValue',
      type: 'boolean',
      default: 'undefined',
      description: 'Two-way bound value via v-model.',
    },
  ] satisfies Array<{
    name: keyof CheckboxInputProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const radioInputApiConfig = {
  data: [
    {
      name: 'input.id',
      type: 'string',
      default: 'undefined',
      description: 'Unique HTML id for the radio input and its label.',
    },
    {
      name: 'input.groupName',
      type: 'string',
      default: 'undefined',
      description: 'Shared name attribute that groups radio buttons together.',
    },
    {
      name: 'input.label',
      type: 'string',
      default: 'undefined',
      description: 'Visible label text for this radio option.',
    },
    {
      name: 'input.value',
      type: 'string',
      default: 'undefined',
      description: 'Value submitted when this radio option is selected.',
    },
  ] satisfies Array<{
    name: keyof RadioInputProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const datePickerApiConfig = {
  data: [
    {
      name: 'modelValue',
      type: 'Date | null',
      default: 'undefined',
      description: 'Two-way bound Date value via v-model.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: `'Select date'`,
      description: 'Placeholder text shown when no date is selected.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Prevents the calendar from opening.',
    },
    {
      name: 'minDate',
      type: 'Date',
      default: 'undefined',
      description: 'Earliest selectable date.',
    },
    {
      name: 'maxDate',
      type: 'Date',
      default: 'undefined',
      description: 'Latest selectable date.',
    },
  ] satisfies Array<{
    name: keyof DatePickerProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const selectSectionConfig: DocSection[] = [
  { id: 'select-api-ref', label: 'API Reference', component: ApiReference },
  { id: 'select-select-input', label: 'Select Input', component: SelectInputExample },
  { id: 'select-select-input-form', label: 'Select Input Form', component: SelectInputWithFormExample },
  { id: 'select-checkbox', label: 'Checkbox Input', component: CheckboxInputExample },
  { id: 'select-checkbox-form', label: 'Checkbox Input Form', component: CheckboxInputWithFormExample },
  { id: 'select-radio', label: 'Radio Input', component: RadioInputExample },
  { id: 'select-radio-form', label: 'Radio Input Form', component: RadioInputWithFormExample },
  { id: 'select-datepicker', label: 'Date Picker', component: DatePickerExample },
  { id: 'select-datepicker-form', label: 'Date Picker Form', component: DatePickerWithFormExample },
];

export {
  selectInputApiConfig,
  checkboxInputApiConfig,
  radioInputApiConfig,
  datePickerApiConfig,
  selectSectionConfig,
};
