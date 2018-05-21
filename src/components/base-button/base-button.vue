<template>
    <router-link v-if="!external" :class="buttonClasses" :to="target">
        <slot></slot>
    </router-link>
    <a v-else :href="target" target="_blank" :class="buttonClasses">
        <slot></slot>
    </a>
</template>

<script lang="ts" src="./base-button.ts"></script>
<style lang="scss" src="./base-button.scss"></style>
