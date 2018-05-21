<template>
    <transition v-if="!group"
                :enter-class="name + '--enter'"
                :enter-active-class="name + '--enter-active'"
                :enter-to-class="name + '--enter-to'"
                :move-class="name + '--move'"
                :leave-class="name + '--leave'"
                :leave-active-class="name + '--leave-active'"
                :leave-to-class="name + '--leave-to'"
                :appear="appear"
                :mode="mode">
        <slot></slot>
    </transition>
    <transition-group v-else
                 :enter-class="name + '--enter'"
                 :enter-active-class="name + '--enter-active'"
                 :enter-to-class="name + '--enter-to'"
                 :move-class="name + '--move'"
                 :leave-class="name + '--leave'"
                 :leave-active-class="name + '--leave-active'"
                 :leave-to-class="name + '--leave-to'"
                 :appear="appear">
        <slot></slot>
    </transition-group>
</template>

<script lang="ts" src="./base-transition.ts"></script>
<style lang="scss" src="./base-transition.scss"></style>
