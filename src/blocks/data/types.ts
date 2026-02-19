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

export type { DataTableColumn, Column };
