import type { DocRoute, CategoryGroup, ComponentItem } from './types';

const docRoutesConfig: DocRoute[] = [
  {
    name: 'button',
    label: 'Button',
    category: 'Button',
    component: () => import('@/pages/docs/ButtonPage.vue'),
  },
  // {
  //   name: 'textInput',
  //   label: 'TextInput',
  //   category: 'Form',
  //   component: () => import('@/pages/docs/TextInputPage.vue'),
  // },
  // {
  //   name: 'selectInput',
  //   label: 'SelectInput',
  //   category: 'Form',
  //   component: () => import('@/pages/docs/SelectInputPage.vue'),
  // },
];

// Helper function to organize routes by category
function organizeRoutesByCategory(routes: DocRoute[]): CategoryGroup[] {
  const categoryMap = new Map<string, ComponentItem[]>();

  // Group routes by category
  routes.forEach((route) => {
    if (!categoryMap.has(route.category)) {
      categoryMap.set(route.category, []);
    }
    categoryMap.get(route.category)!.push({
      name: route.name,
      label: route.label,
    });
  });

  // Convert map to array and sort categories alphabetically
  return Array.from(categoryMap.entries())
    .map(([category, components]) => ({
      category,
      components,
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
}

export { docRoutesConfig, organizeRoutesByCategory };
