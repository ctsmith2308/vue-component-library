interface DocRoute {
  name: string;
  label: string;
  category: string;
  component: () => Promise<unknown>;
}

interface ComponentItem {
  name: string;
  label: string;
}

interface CategoryGroup {
  category: string;
  components: ComponentItem[];
}

export type { DocRoute, ComponentItem, CategoryGroup };
