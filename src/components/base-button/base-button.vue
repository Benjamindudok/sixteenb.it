<template>
    <router-link :class="buttonClasses" :to="target">
        <slot></slot>
    </router-link>
</template>

<script lang="ts" src="./base-button.ts"></script>
<style lang="scss" src="./base-button.scss"></style>
