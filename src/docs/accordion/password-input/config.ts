import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import PasswordExample from './PasswordExample.vue';
import PasswordWithFormExample from './PasswordWithFormExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface PasswordInputProps {
  name: string;
  modelValue?: string;
  label?: string;
  placeholder?: string;
  minLength?: number;
  disabled?: boolean;
  fluid?: boolean;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'name',
      type: 'string',
      default: 'undefined',
      description: 'Required. HTML name attribute and Form field registration key.',
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
      description: 'Visible label rendered above the input.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: `'Placeholder...'`,
      description: 'Placeholder text shown when the field is empty.',
    },
    {
      name: 'minLength',
      type: 'number',
      default: '12',
      description: 'Minimum character length enforced by the built-in validation rule. Override to relax or tighten the requirement.',
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
    name: keyof PasswordInputProps | string;
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

const passwordInputSectionConfig: DocSection[] = [
  { id: 'password-input-api', label: 'API Reference', component: ApiReference },
  { id: 'password-input-basic', label: 'Basic', component: PasswordExample },
  { id: 'password-input-form', label: 'With Form', component: PasswordWithFormExample },
];

export { apiReferenceConfig, passwordInputSectionConfig };
