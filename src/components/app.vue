<template>
    <anemone-base class="app">
        <navigation-bar @show-about="showAboutOverlay = true"></navigation-bar>

        <div class="app__overlay-toggle" @click="showNavigationOverlay = true">&#9776;</div>

        <base-transition name="slide-from-bottom" :appear="true">
            <router-view :key="$route.path"></router-view>
        </base-transition>

        <app-footer></app-footer>

        <navigation-overlay @close="showNavigationOverlay = false"
                            @show-about="showAboutOverlay = true"
                            :show="showNavigationOverlay"></navigation-overlay>

        <about-overlay @close="showAboutOverlay = false"
                       :show="showAboutOverlay"></about-overlay>
    </anemone-base>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
