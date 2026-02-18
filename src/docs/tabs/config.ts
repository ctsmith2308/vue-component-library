import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface TabsProps {
  tabs: Array<{
    header: string;
    component: object;
    disabled?: boolean;
    props?: Record<string, unknown>;
  }>;
  activeIndex: number;
}

const apiReferenceConfig = {
  data: [
    { name: 'tabs', type: 'Array<{ header: string; component: Component; disabled?: boolean; props?: Record<string, unknown> }>', default: 'undefined', description: 'Array of tab definitions. Each requires a header and a Vue component for the panel body.' },
    { name: 'activeIndex', type: 'number', default: '0', description: 'Index of the initially active tab.' },
  ] satisfies Array<{ name: keyof TabsProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const tabsSectionConfig: DocSection[] = [
  { id: 'tabs-api', label: 'API Reference', component: ApiReference },
  { id: 'tabs-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, tabsSectionConfig };
