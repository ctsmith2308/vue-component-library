import { createRouter, createWebHistory } from 'vue-router';

/** Pages */
const LandingPage = () => import('@/pages/landing/landing-page.vue');
const ComponentDocsPage = () => import('@/pages/component-docs/component-docs-page.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/:componentName', // ✅ ONE dynamic route catches all
      name: 'component-docs',
      component: ComponentDocsPage,
    },
  ],
});

export { router };
