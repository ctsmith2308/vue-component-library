import './main.css';

import { createApp } from 'vue';
import { withProviders } from './providers';
import App from './App.vue';

const app = createApp(App);

withProviders(app).mount('#app');
