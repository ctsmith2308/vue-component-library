import type { DocRoute, CategoryGroup, ComponentItem } from './types';

const docRoutesConfig: DocRoute[] = [
  {
    name: 'button',
    label: 'Button',
    category: 'Button',
    component: () => import('@/docs/button/index.vue'),
  },
  {
    name: 'password-input',
    label: 'PasswordInput',
    category: 'Form',
    component: () => import('@/docs/password-input/index.vue'),
  },
  {
    name: 'text-input',
    label: 'TextInput',
    category: 'Form',
    component: () => import('@/docs/text-input/index.vue'),
  },
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
