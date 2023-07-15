import {createRouter, createWebHashHistory} from 'vue-router';
import Panel from '@/views/Panel.vue';

const routes = [
    {
        path: '/',
        name: 'panel',
        component: Panel
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
