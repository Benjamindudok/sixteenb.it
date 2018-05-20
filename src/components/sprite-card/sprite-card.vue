<template>
    <router-link :class="cssClasses" :to="'/sprite/' + uuid" >
        <div :class="{'sprite-card__image': true, 'sprite-card__image--alternate-1': randomColorId == 1, 'sprite-card__image--alternate-2': randomColorId == 2}"
             :style="{'background-image': 'url(' + source + ')'}"></div>
        <h3 class="sprite-card__title" v-if="name">{{name}}</h3>
    </router-link>
</template>

<script lang="ts" src="./sprite-card.ts"></script>
<style lang="scss" src="./sprite-card.scss"></style>
