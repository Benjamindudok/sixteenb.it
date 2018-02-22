<template>
    <nav class="navigation-bar">
        <div class="container">
            <h1 class="navigation-bar__title">Sixteenbit</h1>
            <ul class="navigation-bar__list">
                <li class="navigation-bar__item">
                    <router-link to="/" class="navigation-bar__link">Sprites</router-link>
                </li>
                <li class="navigation-bar__item" @click="showAbout">
                    <span class="navigation-bar__link">About</span>
                </li>
            </ul>
            <ul class="navigation-bar__list navigation-bar__list--right">
                <li class="navigation-bar__item">
                    <router-link to="/" class="navigation-bar__link">Donate!</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts" src="./navigation-bar.ts"></script>
<style lang="scss" src="./navigation-bar.scss"></style>
