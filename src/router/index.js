import Vue from 'vue';
import VueRouter from 'vue-router';
import store, { Types } from '@/store';
import Home from '@/views/Home.vue';
import Classification from '@/views/Classification';
import DinghyClass from '@/views/DinghyClass';

Vue.use(VueRouter);

const routes = [
    {
        path: '/:lang?/classification/:codename',
        name: 'Classification',
        component: Classification
    },
    {
        path: '/:lang?/class/:codename',
        name: 'DinghyClass',
        component: DinghyClass
    },
    {
        path: '/:lang?/',
        name: 'Home',
        component: Home
    },
    {
        path: '/*',
        name: '404',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.params.lang) {
        store.dispatch(Types.actions.SET_TO_DEFAULT_LANGUAGE);
    }
    store.dispatch(Types.actions.SET_SELECTED_LANGUAGE, { language: to.params.lang });

    next();
});

export default router;
