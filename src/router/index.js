import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/home/Home.vue';
// import List from '@/views/other/List.vue';
// import Page from '@/components/page/Page1.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: (resolve) => {
                require(['@/views/home/Home.vue'], resolve);
            }
        },
        {
            path: '/list',
            name: 'List',
            component: (resolve) => {
                require(['@/views/other/List.vue'], resolve);
            },
            children: [{
                path: '/list/page',
                name: 'page',
                component: (resolve) => {
                    require(['@/components/page/Page1.vue'], resolve);
                },
                meta: { keepAlive: true }
            }, {
                path: '/list/pagess',
                name: 'page2',
                component: (resolve) => {
                    require(['@/components/page/Page2.vue'], resolve);
                },
                meta: { keepAlive: true }
            }]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
