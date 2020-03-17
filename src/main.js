import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Portal from 'portal-vue';
import Meta from 'vue-meta';

Vue.config.productionTip = false;
Vue.use(Portal);
Vue.use(Meta);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
