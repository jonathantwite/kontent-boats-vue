import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Portal from 'portal-vue';
import Meta from 'vue-meta';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(Portal);
Vue.use(Meta);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
