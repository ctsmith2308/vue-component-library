import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface DrawerDocProps {
  position?: string;
  size?: string;
  isOpen?: boolean;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'false',
      description: 'Controls the visibility of the drawer.',
    },
    {
      name: 'position',
      type: "'left' | 'right' | 'top' | 'bottom'",
      default: "'left'",
      description: 'The edge of the screen the drawer slides in from.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'full'",
      default: "'md'",
      description: 'Controls the width (horizontal) or height (vertical) of the drawer.',
    },
  ] satisfies Array<{ name: keyof DrawerDocProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const drawerSectionConfig: DocSection[] = [
  { id: 'drawer-api', label: 'API Reference', component: ApiReference },
  { id: 'drawer-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, drawerSectionConfig };
