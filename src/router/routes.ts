import { docRoutesConfig } from './config';

/** Pages */
const LandingPage = () => import('@/pages/landing/LandigPage.vue');
const DocsPage = () => import('@/pages/docs/DocsPage.vue');

const routes = [
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
      name: route.name,
      component: route.component,
      meta: {
        label: route.label,
        category: route.category,
      },
    })),
  },
];

export { routes };
