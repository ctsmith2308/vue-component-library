import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import SortableExample from './SortableExample.vue';
import PaginatedExample from './PaginatedExample.vue';
import LoadingExample from './LoadingExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface DataTableProps {
  data: Record<string, unknown>[];
  columns: Array<{ field: string; header: string; sortable?: boolean; width?: string }>;
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  paginated?: boolean;
  rows?: number;
  totalRecords?: number;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'data',
      type: 'T[]',
      default: 'undefined',
      description: 'Array of row objects to render.',
    },
    {
      name: 'columns',
      type: 'Array<{ field: string; header: string; sortable?: boolean; width?: string }>',
      default: 'undefined',
      description: 'Column definitions mapping object keys to header labels.',
    },
    {
      name: 'hoverable',
      type: 'boolean',
      default: 'true',
      description: 'Highlights table rows on hover.',
    },
    {
      name: 'bordered',
      type: 'boolean',
      default: 'false',
      description: 'Adds cell borders throughout the table.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Replaces table rows with a skeleton loader.',
    },
    {
      name: 'emptyMessage',
      type: 'string',
      default: "'No data available'",
      description: 'Text shown when the data array is empty.',
    },
    {
      name: 'paginated',
      type: 'boolean',
      default: 'false',
      description: 'Enables client-side pagination via the Paginator component.',
    },
    {
      name: 'rows',
      type: 'number',
      default: '10',
      description: 'Number of rows shown per page when paginated.',
    },
    {
      name: 'totalRecords',
      type: 'number',
      default: 'data.length',
      description: 'Total record count for paginator calculations. Defaults to data.length.',
    },
  ] satisfies Array<{
    name: keyof DataTableProps | string;
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

const dataTableSectionConfig: DocSection[] = [
  { id: 'data-table-api', label: 'API Reference', component: ApiReference },
  { id: 'data-table-basic', label: 'Basic', component: BasicExample },
  { id: 'data-table-sortable', label: 'Sortable', component: SortableExample },
  { id: 'data-table-paginated', label: 'Paginated', component: PaginatedExample },
  { id: 'data-table-loading', label: 'Loading', component: LoadingExample },
];

export { apiReferenceConfig, dataTableSectionConfig };
