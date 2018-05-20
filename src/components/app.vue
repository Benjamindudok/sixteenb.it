<template>
    <div class="app">
        <navigation-bar @show-about="showAboutOverlay = true"></navigation-bar>

        <div class="app__overlay-toggle" @click="showNavigationOverlay = true">&#9776;</div>

        <router-view></router-view>

        <navigation-overlay @close="showNavigationOverlay = false"
                            @show-about="showAboutOverlay = true"
                            :show="showNavigationOverlay"></navigation-overlay>

        <about-overlay @close="showAboutOverlay = false"
                       :show="showAboutOverlay"></about-overlay>
    </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
