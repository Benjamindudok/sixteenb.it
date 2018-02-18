<template>
    <div class="app">
        <navigation-bar></navigation-bar>

        <div class="app__overlay-toggle" @click="showOverlay = true">&#9776;</div>

        <router-view></router-view>

        <navigation-overlay @close="showOverlay = false" :show="showOverlay"></navigation-overlay>
    </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>
