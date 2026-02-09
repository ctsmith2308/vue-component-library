import { createApp } from 'vue';
import { router } from './router';
import { VCodeBlock } from './vue-code-block';

const withProviders = (app: ReturnType<typeof createApp>) => {
  return app.use(router).use(VCodeBlock);
};

export { withProviders };
