<template>
    <main class="container sprite" v-if="sprite">


        <section class="sprite__details">
            <div class="sprite__preview"
                 :style="previewStyle"
                 :alt="previewAlt"></div>

            <div class="sprite__content">
                <h2 class="sprite__title">{{sprite.name}}</h2>

                <p class="sprite__description">
                    {{sprite.description}}
                </p>

                <ul class="sprite__meta">
                    <li class="sprite__data">
                        <strong>File size:</strong> {{sprite.fileSize}}
                    </li>
                    <li class="sprite__data">
                        <strong>Dimensions:</strong> {{sprite.width}}px x {{sprite.height}}px
                    </li>
                </ul>

                <div class="sprite__badges">
                    <base-badge variant="primary" v-for="tag in sprite.tags" :key="tag">{{tag}}</base-badge>
                </div>

                <base-button :external="true" class="sprite__download" :target="sprite.image" variant="secondary">Download</base-button>
            </div>

        </section>

    </main>
</template>

<script lang="ts" src="./sprite.ts"></script>
<style lang="scss" src="./sprite.scss"></style>
