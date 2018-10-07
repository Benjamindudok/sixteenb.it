<template>
    <anemone-overlay class="about-overlay" @close="close" :show="show">
        <div class="about-overlay__content">
            <h2>About the creator</h2>
            <p>
                This website is developed by <a href="http://www.benjamindudok.nl" target="_blank">Benjamin Dudok</a>,
                a front-end developer with a passion for pixel art and 2d games.
            </p>

            <p>
                I've made alot of assets when I
                was younger, making RPG's with RPGMaker. I've had a little break making actual pixel art. But i never
                stopped caring for the beauty of 8/16-bit era computer graphics.
            </p>

            <p>
                Now i'm back making pixel art again, and intend to release everything I make on this website free
                for everyone to use in games or anything else.
            </p>
        </div>
    </anemone-overlay>
</template>

<script lang="ts" src="./about-overlay.ts"></script>
<style lang="scss" src="./about-overlay.scss"></style>
