import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface PopoverProps {
  dismissable?: boolean;
  showCloseIcon?: boolean;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'dismissable',
      type: 'boolean',
      default: 'true',
      description: 'When true, clicking outside the popover will close it.',
    },
    {
      name: 'showCloseIcon',
      type: 'boolean',
      default: 'false',
      description: 'When true, renders a × button in the top-right corner of the popover.',
    },
  ] satisfies Array<{ name: keyof PopoverProps | string; type: string; default: string; description: string }>,
  emits: [
    { name: 'show', description: 'Emitted when the popover becomes visible.' },
    { name: 'hide', description: 'Emitted when the popover is hidden.' },
  ] satisfies Array<{ name: string; description: string }>,
  exposed: [
    { name: 'show(event: MouseEvent)', description: 'Opens the popover anchored to the event target.' },
    { name: 'hide()', description: 'Closes the popover.' },
    { name: 'toggle(event: MouseEvent)', description: 'Toggles the popover open or closed.' },
  ] satisfies Array<{ name: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const popoverSectionConfig: DocSection[] = [
  { id: 'popover-api', label: 'API Reference', component: ApiReference },
  { id: 'popover-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, popoverSectionConfig };
