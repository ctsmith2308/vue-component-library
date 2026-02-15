import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { docRoutesConfig, organizeRoutesByCategory } from './config';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export * from './types';
export { router, docRoutesConfig, organizeRoutesByCategory };
