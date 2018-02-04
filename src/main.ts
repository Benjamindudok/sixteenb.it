// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Vue components
import App from 'src/components/App.vue';
import BaseBadge from 'src/components/base-badge/base-badge.vue';
import CategoryList from 'src/components/category-list/category-list.vue';
import NavigationBar from 'src/components/navigation-bar/navigation-bar.vue';
import SpriteCard from 'src/components/sprite-card/sprite-card.vue';
import SpriteList from 'src/components/sprite-list/sprite-list.vue';

// Vue filters
import { fromNow, format } from './utils/filters/dates/';

// Vue libraries
import router from 'src/views/';
import store from 'src/store/';

Vue.config.productionTip = false;

Vue.component('base-badge', BaseBadge);
Vue.component('category-list', CategoryList);
Vue.component('navigation-bar', NavigationBar);
Vue.component('sprite-card', SpriteCard);
Vue.component('sprite-list', SpriteList);

Vue.filter('formatTime', format);
Vue.filter('TimeFromNow', fromNow);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
