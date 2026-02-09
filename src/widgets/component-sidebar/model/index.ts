import type { ComponentRegistry } from './types';

import { buttonRegistry } from './registry/button';
import { dataRegistry } from './registry/data';
import { feedbackRegistry } from './registry/feedback';
import { formRegistry } from './registry/form';
import { layoutRegistry } from './registry/layout';
import { mediaRegistry } from './registry/media';
import { navigationRegistry } from './registry/navigation';
import { miscRegistry } from './registry/misc';

const componentRegistry: ComponentRegistry[] = [
  ...buttonRegistry,
  ...dataRegistry,
  ...feedbackRegistry,
  ...formRegistry,
  ...layoutRegistry,
  ...mediaRegistry,
  ...navigationRegistry,
  ...miscRegistry,
];

// Helper to group by category for sidebar
const componentsByCategory = componentRegistry.reduce(
  (acc, route) => {
    if (!acc[route.category]) {
      acc[route.category] = [];
    }
    acc[route.category]!.push(route);

    return acc;
  },
  {} as Record<string, ComponentRegistry[]>,
);

export { componentRegistry, componentsByCategory };
