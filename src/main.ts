// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Vue components
import App from 'src/components/app.vue';
import AppFooter from 'src/components/app-footer/app-footer.vue';
import AboutOverlay from 'src/views/about/overlay/about-overlay.vue';
import BaseBadge from 'src/components/base-badge/base-badge.vue';
import BaseButton from 'src/components/base-button/base-button.vue';
import BaseOverlay from 'src/components/base-overlay/base-overlay.vue';
import BasePagination from 'src/components/base-pagination/base-pagination.vue';
import BaseTransition from 'src/components/base-transition/base-transition.vue';
import CategoryList from 'src/components/category-list/category-list.vue';
import NavigationBar from 'src/components/navigation-bar/navigation-bar.vue';
import NavigationOverlay from 'src/components/navigation-overlay/navigation-overlay.vue';
import SpriteCard from 'src/components/sprite-card/sprite-card.vue';
import SpriteList from 'src/components/sprite-list/sprite-list.vue';

// Vue filters
import { fromNow, format } from './utils/filters/dates/';

// Vue libraries
import router from 'src/views/';
import store from 'src/store/';

Vue.config.productionTip = false;

Vue.component('app-footer', AppFooter);
Vue.component('about-overlay', AboutOverlay);
Vue.component('base-badge', BaseBadge);
Vue.component('base-button', BaseButton);
Vue.component('base-overlay', BaseOverlay);
Vue.component('base-pagination', BasePagination);
Vue.component('base-transition', BaseTransition);
Vue.component('category-list', CategoryList);
Vue.component('navigation-bar', NavigationBar);
Vue.component('navigation-overlay', NavigationOverlay);
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
