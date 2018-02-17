<template>
    <main class="container sprite" v-if="sprite">

        <figure class="sprite__figure">
            <img class="sprite__image"
                 :src="sprite.image"
                 :alt="sprite.name + '.png'">
        </figure>

        <section class="sprite__details">
            <header class="sprite__header" v-if="sprite">
                <h2 class="sprite__title">{{sprite.name}}</h2>
                <base-badge v-for="tag in sprite.tags" :key="tag">{{tag}}</base-badge>
            </header>

            <p class="sprite__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed volutpat tortor,
                eu tincidunt ligula. Suspendisse ullamcorper fermentum felis et pharetra.
            </p>

            <base-button class="sprite__download" :target="sprite.image" variant="primary">Download</base-button>
        </section>

    </main>
</template>

<script lang="ts" src="./sprite.ts"></script>
<style lang="scss" src="./sprite.scss"></style>
