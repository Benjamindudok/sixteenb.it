<template>
    <main class="container sprite" v-if="sprite">


        <section class="sprite__details">
            <div class="sprite__preview"
                 :style="previewStyle"
                 :alt="previewAlt"></div>

            <div class="sprite__content">
                <h2 class="sprite__title">{{sprite.name}}</h2>

                <p class="sprite__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed volutpat tortor,
                    eu tincidunt ligula. Suspendisse ullamcorper fermentum felis et pharetra.
                </p>
                <anemone-badge v-for="tag in sprite.tags" :key="tag">{{tag}}</anemone-badge>
            </div>

        </section>

        <anemone-button class="sprite__download" :target="sprite.image" variant="primary">Download</anemone-button>

    </main>
</template>

<script lang="ts" src="./sprite.ts"></script>
<style lang="scss" src="./sprite.scss"></style>
