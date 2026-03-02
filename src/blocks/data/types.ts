interface DataTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
  wrap?: boolean;
}

interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
  wrap?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  paginated?: boolean;
  rows?: number;
  totalRecords?: number;
}

interface TableRowProps<T> {
  row: T;
  columns: Column[];
  index: number;
  hoverable: boolean;
}

export type { DataTableColumn, Column, DataTableProps, TableRowProps };
