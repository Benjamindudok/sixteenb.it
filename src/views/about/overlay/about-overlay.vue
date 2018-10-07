<template>
    <anemone-overlay class="about-overlay" @close="close" :show="show">
        <div class="about-overlay__content">
            <div class="container grid">
                <section class="grid__item">
                    <h3>About the creators</h3>
                    <p>
                        This website is developed and maintained by <a href="http://www.benjamindudok.nl" target="_blank">
                        Benjamin Dudok</a> and <a href="http://www.chantalvaniwaarden.nl" target="_blank">Chantal van
                        Iwaarden</a>, both front-end developers with a passion for pixel art and 2d games.

                    </p>

                    <p>
                        Benjamin's made alot of assets when he was younger, making RPG's with RPGMaker. He's had a little
                        break making actual pixel art. But he never stopped caring for the beauty of 8/16-bit era computer
                        graphics, and even sparked the passion of creating pixel art in Chantal.
                    </p>

                    <p>
                        We've created this website to showcase all our ventures into the world of 16-bit 2d games, making
                        assets everyone can use in any creative work. And we might also create our own game too perhaps!
                    </p>
                </section>
                <section class="grid__item">
                    <h3>Limitations of 16-bit pixel art</h3>
                    <p>
                        We want to limit ourselves to create pixel art which could actually be used in the 16-bit game
                        era. Our most favorite console being the SNES, we've set some conditions for all the things we
                        publish on this website:
                    </p>

                    <ul>
                        <li>A maximum screen resolution of 256x224px</li>
                        <li>15-bit colors (32,768 total colors)</li>
                        <li>16 colors per sprite</li>
                        <li>256 colors maximum per scanline</li>
                    </ul>
                </section>
            </div>
        </div>
    </anemone-overlay>
</template>

<script lang="ts" src="./about-overlay.ts"></script>
<style lang="scss" src="./about-overlay.scss"></style>
