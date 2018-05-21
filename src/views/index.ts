import Vue from 'vue';
import Router from 'vue-router';
import Listing from 'src/views/listing/listing.vue';
import Sprite from 'src/views/sprite/sprite.vue';

declare var __HISTORY_MODE__: any;

Vue.use(Router);

export default new Router({
    mode: __HISTORY_MODE__,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Listing
        },
        {
            path: '/sprite/:spriteID',
            name: 'Sprite details',
            component: Sprite
        }
    ]
});
