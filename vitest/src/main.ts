import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import ClickedOutsideDirective from './directives/clicked-outside';

const app = createApp(App);

app.directive('clicked-outside', ClickedOutsideDirective);

app.use(createPinia());
app.use(router);

app.mount('#app');
