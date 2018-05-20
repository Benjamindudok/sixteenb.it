<template>
    <base-overlay class="navigation-overlay" @close="close" :show="show">
        <ul class="navigation-overlay__list">
            <li class="navigation-overlay__item" @click="close">
                <router-link to="/" class="navigation-overlay__link">Sprites</router-link>
            </li>
            <li class="navigation-overlay__item" @click="showAbout">
                <span class="navigation-overlay__link">About</span>
            </li>
            <li class="navigation-overlay__item">

            </li>
            <li class="navigation-overlay__item" @click="close">
                <router-link to="/" class="navigation-overlay__link">Donate</router-link>
            </li>
        </ul>
    </base-overlay>
</template>

<script lang="ts" src="./navigation-overlay.ts"></script>
<style lang="scss" src="./navigation-overlay.scss"></style>
