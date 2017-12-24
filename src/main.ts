// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Vue components
import App from 'src/components/App.vue';

// Vue filters
import { fromNow, format } from './utils/filters/dates/';

// Vue libraries
import router from 'src/views/';
import store from 'src/store/';

Vue.config.productionTip = false;

Vue.filter('formatTime', format);
Vue.filter('TimeFromNow', fromNow);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
