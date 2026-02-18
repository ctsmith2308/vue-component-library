import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import TextInputExample from './TextInputExample.vue';
import TextInputMaskExamples from './TextInputMaskExamples.vue';
import TextInputWithFormExample from './TextInputWithFormExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface TextInputProps {
  modelValue?: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'phone' | 'url' | 'number';
  label?: string;
  rules?: { required?: boolean; email?: boolean; url?: boolean; minLength?: number; maxLength?: number };
  mask?: 'phone' | 'numeric' | 'alpha' | 'alpha_num' | 'alpha_dash';
  disabled?: boolean;
  fluid?: boolean;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'name',
      type: 'string',
      default: 'undefined',
      description: 'Required. Used as the HTML name attribute and as the key for Form field registration.',
    },
    {
      name: 'modelValue',
      type: 'string',
      default: 'undefined',
      description: 'Two-way bound value via v-model.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Visible label rendered above the input. Automatically shows a required asterisk when rules.required is set.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: `'Placeholder...'`,
      description: 'Placeholder text shown when the input is empty.',
    },
    {
      name: 'type',
      type: `'text' | 'email' | 'password' | 'phone' | 'url' | 'number'`,
      default: `'text'`,
      description: 'HTML input type.',
    },
    {
      name: 'rules',
      type: `{ required?: boolean; email?: boolean; url?: boolean; minLength?: number; maxLength?: number }`,
      default: 'undefined',
      description: 'Validation rules evaluated by the parent Form on submit and on blur.',
    },
    {
      name: 'mask',
      type: `'phone' | 'numeric' | 'alpha' | 'alpha_num' | 'alpha_dash'`,
      default: 'undefined',
      description: 'Restricts characters the user can type by applying a mask on every input event.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Prevents interaction and applies a muted visual style.',
    },
    {
      name: 'fluid',
      type: 'boolean',
      default: 'false',
      description: 'Makes the outer wrapper full-width (w-full).',
    },
  ] satisfies Array<{
    name: keyof TextInputProps | string;
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

const textInputSectionConfig: DocSection[] = [
  { id: 'text-input-api', label: 'API Reference', component: ApiReference },
  { id: 'text-input-basic', label: 'Basic', component: TextInputExample },
  { id: 'text-input-masks', label: 'Input Masks', component: TextInputMaskExamples },
  { id: 'text-input-form', label: 'With Form', component: TextInputWithFormExample },
];

export { apiReferenceConfig, textInputSectionConfig };
