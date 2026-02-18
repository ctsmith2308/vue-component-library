import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import ColorExample from './ColorExample.vue';
import OutlinedExample from './OutlinedExample.vue';
import GhostExample from './GhostExample.vue';
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

interface ButtonProps {
  label?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'jumbo';
  variant?: 'outlined' | 'ghost' | 'text' | 'link';
  raised?: boolean;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text rendered inside the button. Use the default slot for richer content.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color theme applied to the button background or border.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl' | 'jumbo'`,
      default: `'md'`,
      description: 'Controls the height and max-width of the button.',
    },
    {
      name: 'variant',
      type: `'outlined' | 'ghost' | 'text' | 'link'`,
      default: 'undefined',
      description: `Alternate visual style. outlined adds a coloured border; ghost uses a neutral border; text removes the background; link adds an underline on hover.`,
    },
    {
      name: 'raised',
      type: 'boolean',
      default: 'false',
      description: 'Adds a drop shadow beneath the button.',
    },
    {
      name: 'rounded',
      type: 'boolean',
      default: 'false',
      description: 'Applies fully rounded (pill) corners instead of the default rounded-md.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Replaces the label with a spinner and sets cursor-progress. Disables click.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Visually mutes the button and prevents interaction.',
    },
  ] satisfies Array<{
    name: keyof ButtonProps | string;
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

const buttonSectionExamplesConfig: DocSection[] = [
  { id: 'button-api', label: 'API Reference', component: ApiReference },
  { id: 'button-color', label: 'Colors', component: ColorExample },
  { id: 'button-outlined', label: 'Outlined', component: OutlinedExample },
  { id: 'button-ghost', label: 'Ghost', component: GhostExample },
  { id: 'button-raised', label: 'Raised', component: RaisedExample },
  { id: 'button-rounded', label: 'Rounded', component: RoundedExample },
  { id: 'button-text', label: 'Text', component: TextExample },
  { id: 'button-size', label: 'Sizes', component: SizeExample },
  { id: 'button-loading', label: 'Loading', component: LoadingExample },
  { id: 'button-disabled', label: 'Disabled', component: DisabledExample },
];

export { apiReferenceConfig, buttonSectionExamplesConfig };
