import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import ColorExample from './ColorExample.vue';
import OutlinedExample from './OutlinedExample.vue';
import RaisedExample from './RaisedExample.vue';
import RoundedExample from './RoundedExample.vue';
import TextExample from './TextExample.vue';
import SizeExample from './SizeExample.vue';
import LoadingExample from './LoadingExample.vue';
import DisabledExample from './DisabledExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text of the button.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color of the button',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl' | 'jumbo'`,
      default: `'md'`,
      description: 'Size of the button.',
    },
    {
      name: 'variant',
      type: `'outlined' | 'link' | 'text'`,
      default: 'undefined',
      description: 'Variant styling of the button.',
    },
    {
      name: 'raised',
      type: 'boolean',
      default: 'false',
      description: 'Adds box shadow to the button.',
    },
    {
      name: 'rounded',
      type: 'boolean',
      default: 'false',
      description: 'Gives rounded border to the button.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Indicates the loading status of the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Indicates the disabled status of the button',
    },
  ],
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const buttonSectionExamplesConfig: DocSection[] = [
  { id: 'api-ref', label: 'Api Reference', component: ApiReference },
  { id: 'color', label: 'Colors', component: ColorExample },
  { id: 'outlined', label: 'Outlined', component: OutlinedExample },
  { id: 'raised', label: 'Raised', component: RaisedExample },
  { id: 'rounded', label: 'Rounded', component: RoundedExample },
  { id: 'text', label: 'Text', component: TextExample },
  { id: 'size', label: 'Size', component: SizeExample },
  { id: 'loading', label: 'Loading', component: LoadingExample },
  { id: 'disabled', label: 'Disabled', component: DisabledExample },
];

export { apiReferenceConfig, buttonSectionExamplesConfig };
