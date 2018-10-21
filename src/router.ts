import Vue from 'vue';
import Router from 'vue-router';
import Listing from 'src/views/listing/listing.vue';
import Sprite from 'src/views/sprite/sprite.vue';

Vue.use(Router);

export default new Router({
    mode: process.env.VUE_APP_HISTORY_MODE,
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
