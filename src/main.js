// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/scss/reset.scss';
import Vue from 'vue';
import App from './App';

import router from './router';
import store from './vuex';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './http';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
