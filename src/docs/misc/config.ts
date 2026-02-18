import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import AvatarExample from './AvatarExample.vue';
import ChipExample from './ChipExample.vue';
import TagExample from './TagExample.vue';
import ToggleSwitchExample from './ToggleSwitchExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface AvatarProps {
  image?: string;
  label?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
}

interface ChipProps {
  label: string;
  removable?: boolean;
  icon?: boolean;
  image?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

interface TagProps {
  value: string;
  severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  rounded?: boolean;
  icon?: boolean;
}

interface ToggleSwitchProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  labelPosition?: 'left' | 'right';
}

const avatarApiConfig = {
  data: [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Full name used to derive initials when no image is provided.',
    },
    {
      name: 'image',
      type: 'string',
      default: 'undefined',
      description: 'URL of the avatar image.',
    },
    {
      name: 'icon',
      type: 'boolean',
      default: 'false',
      description: 'When true, renders the icon slot instead of initials.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl'`,
      default: `'md'`,
      description: 'Size of the avatar.',
    },
    {
      name: 'shape',
      type: `'circle' | 'square'`,
      default: `'circle'`,
      description: 'Shape of the avatar container.',
    },
  ] satisfies Array<{
    name: keyof AvatarProps | string;
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

const chipApiConfig = {
  data: [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text displayed inside the chip.',
    },
    {
      name: 'removable',
      type: 'boolean',
      default: 'false',
      description: 'Shows a remove/close button on the chip.',
    },
    {
      name: 'icon',
      type: 'boolean',
      default: 'false',
      description: 'When true, renders the icon slot before the label.',
    },
    {
      name: 'image',
      type: 'string',
      default: 'undefined',
      description: 'URL of an image shown before the label.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color theme of the chip.',
    },
  ] satisfies Array<{
    name: keyof ChipProps | string;
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

const tagApiConfig = {
  data: [
    {
      name: 'value',
      type: 'string',
      default: 'undefined',
      description: 'Text displayed inside the tag.',
    },
    {
      name: 'severity',
      type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'`,
      default: `'primary'`,
      description: 'Color theme conveying meaning (status, level, etc.).',
    },
    {
      name: 'rounded',
      type: 'boolean',
      default: 'false',
      description: 'Renders the tag with fully rounded (pill) corners.',
    },
    {
      name: 'icon',
      type: 'boolean',
      default: 'false',
      description: 'When true, renders the icon slot before the label.',
    },
  ] satisfies Array<{
    name: keyof TagProps | string;
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

const toggleSwitchApiConfig = {
  data: [
    {
      name: 'modelValue',
      type: 'boolean',
      default: 'undefined',
      description: 'Bound value via v-model.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text label displayed next to the toggle.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables interaction with the toggle.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg'`,
      default: `'md'`,
      description: 'Visual size of the toggle track and thumb.',
    },
    {
      name: 'labelPosition',
      type: `'left' | 'right'`,
      default: `'right'`,
      description: 'Position of the label relative to the toggle.',
    },
  ] satisfies Array<{
    name: keyof ToggleSwitchProps | string;
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

const miscSectionConfig: DocSection[] = [
  { id: 'misc-api-ref', label: 'API Reference', component: ApiReference },
  { id: 'misc-avatar', label: 'Avatar', component: AvatarExample },
  { id: 'misc-chip', label: 'Chip', component: ChipExample },
  { id: 'misc-tag', label: 'Tag', component: TagExample },
  { id: 'misc-toggle-switch', label: 'Toggle Switch', component: ToggleSwitchExample },
];

export { avatarApiConfig, chipApiConfig, tagApiConfig, toggleSwitchApiConfig, miscSectionConfig };
