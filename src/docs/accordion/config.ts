import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import MultipleExample from './MultipleExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface AccordionProps {
  tabs: Array<{ header: string; content?: string; disabled?: boolean }>;
  multiple?: boolean;
  activeIndex?: number | number[];
}

const apiReferenceConfig = {
  data: [
    { name: 'tabs', type: 'Array<{ header: string; content?: string; disabled?: boolean }>', default: 'undefined', description: 'Array of panel definitions. Each requires a header; content is optional.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Allows multiple panels to be open simultaneously.' },
    { name: 'activeIndex', type: 'number | number[]', default: 'undefined', description: 'Index or array of indexes of initially open panels.' },
  ] satisfies Array<{ name: keyof AccordionProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const accordionSectionConfig: DocSection[] = [
  { id: 'accordion-api', label: 'API Reference', component: ApiReference },
  { id: 'accordion-basic', label: 'Basic', component: BasicExample },
  { id: 'accordion-multiple', label: 'Multiple & Disabled', component: MultipleExample },
];

export { apiReferenceConfig, accordionSectionConfig };
