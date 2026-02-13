import { createRouter, createWebHistory } from 'vue-router';

/** Pages */
const LandingPage = () => import('@/pages/landing/LandigPage.vue');
const DocsPage = () => import('@/pages/docs/DocsPage.vue');

export interface DocRoute {
  name: string;
  label: string;
  category: string;
  component: () => Promise<unknown>;
}

export const docRoutesConfig: DocRoute[] = [
  {
    name: 'button',
    label: 'Button',
    category: 'Form',
    component: () => import('@/pages/docs/ButtonPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/docs',
      name: 'component-docs',
      component: DocsPage,
      children: docRoutesConfig.map((route) => ({
        path: route.name,
        name: `docs-${route.name}`,
        component: route.component,
        meta: {
          label: route.label,
          category: route.category,
        },
      })),
    },
  ],
});

export { router };
