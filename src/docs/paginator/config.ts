import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface PaginatorProps {
  totalRecords: number;
  rows?: number;
  first?: number;
  pageLinkSize?: number;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'totalRecords',
      type: 'number',
      default: 'undefined',
      description: 'Total number of records across all pages.',
    },
    {
      name: 'rows',
      type: 'number',
      default: '10',
      description: 'Number of records shown per page.',
    },
    {
      name: 'first',
      type: 'number',
      default: '0',
      description: 'Index of the first record on the current page.',
    },
    {
      name: 'pageLinkSize',
      type: 'number',
      default: '5',
      description: 'Maximum number of page number buttons shown.',
    },
  ] satisfies Array<{
    name: keyof PaginatorProps | string;
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

const paginatorSectionConfig: DocSection[] = [
  { id: 'paginator-api', label: 'API Reference', component: ApiReference },
  { id: 'paginator-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, paginatorSectionConfig };
