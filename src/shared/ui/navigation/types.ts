export interface BreadcrumbItem {
  label: string;
  to?: string;
  icon?: boolean;
}

export interface MenuItem {
  label: string;
  icon?: boolean;
  items?: MenuItem[];
  separator?: boolean;
  to?: string;
  command?: () => void;
}
