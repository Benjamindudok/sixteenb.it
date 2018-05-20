<template>
    <base-transition name="overlay">
        <div v-show="show" class="overlay">
            <div class="overlay__close" @click="close">&times;</div>
            <div class="overlay__content" @click.stop>
                <slot></slot>
            </div>
        </div>
    </base-transition>
</template>

<script lang="ts" src="./base-overlay.ts"></script>
<style lang="scss" src="./base-overlay.scss"></style>
