import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import DataTableBasicExample from './DataTableBasicExample.vue';
import DataTableSortableExample from './DataTableSortableExample.vue';
import DataTablePaginatedExample from './DataTablePaginatedExample.vue';
import DataTableLoadingExample from './DataTableLoadingExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface DataTableProps {
  data: Record<string, unknown>[];
  columns: Array<{
    field: string;
    header: string;
    sortable?: boolean;
    width?: string;
  }>;
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
      description: 'Array of objects to display as rows.',
    },
    {
      name: 'columns',
      type: 'Array<{ field: string; header: string; sortable?: boolean; width?: string }>',
      default: 'undefined',
      description: 'Column definitions. Each column maps a field key to a displayed header.',
    },
    {
      name: 'hoverable',
      type: 'boolean',
      default: 'true',
      description: 'Highlights rows on hover.',
    },
    {
      name: 'bordered',
      type: 'boolean',
      default: 'false',
      description: 'Adds borders between rows and columns.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Shows a skeleton loader in place of table rows.',
    },
    {
      name: 'emptyMessage',
      type: 'string',
      default: "'No data available'",
      description: 'Message shown when data array is empty.',
    },
    {
      name: 'paginated',
      type: 'boolean',
      default: 'false',
      description: 'Enables client-side pagination with a Paginator.',
    },
    {
      name: 'rows',
      type: 'number',
      default: '10',
      description: 'Number of rows displayed per page when paginated.',
    },
    {
      name: 'totalRecords',
      type: 'number',
      default: 'data.length',
      description: 'Total record count used for paginator calculations. Defaults to data.length.',
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

const dataSectionConfig: DocSection[] = [
  { id: 'data-api-ref', label: 'API Reference', component: ApiReference },
  { id: 'data-basic', label: 'Basic', component: DataTableBasicExample },
  { id: 'data-sortable', label: 'Sortable', component: DataTableSortableExample },
  { id: 'data-paginated', label: 'Paginated', component: DataTablePaginatedExample },
  { id: 'data-loading', label: 'Loading', component: DataTableLoadingExample },
];

export { apiReferenceConfig, dataSectionConfig };
