<template>
    <nav class="navigation-bar">
        <div class="container">
            <h1 class="navigation-bar__title">Sixteenbit</h1>
            <ul class="navigation-bar__list">
                <li class="navigation-bar__item">
                    <router-link to="/" class="navigation-bar__link" active-class="navigation-bar__link--isActive">Sprites</router-link>
                </li>
                <li class="navigation-bar__item">
                    <router-link to="/about" class="navigation-bar__link" active-class="navigation-bar__link--isActive">About</router-link>
                </li>
            </ul>
            <ul class="navigation-bar__list navigation-bar__list--right">
                <li class="navigation-bar__item">
                    <router-link to="/donate" class="navigation-bar__link" active-class="navigation-bar__link--isActive">Donate!</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts" src="./navigation-bar.ts"></script>
<style lang="scss" src="./navigation-bar.scss"></style>
