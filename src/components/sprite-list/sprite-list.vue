<template>
        <anemone-transitions name="slide-from-bottom" tag="section" class="sprite-list" :group="false">
            <sprite-card v-for="sprite in filteredSprites"
                         :key="sprite.uuid"
                         :class="{'sprite-list__item': true}"
                         :name="sprite.name"
                         :uuid="sprite.uuid"
                         :source="sprite.preview"
                         :rows="sprite.rows"
                         :columns="sprite.columns">
            </sprite-card>
        </anemone-transitions>
</template>

<script lang="ts" src="./sprite-list.ts"></script>
<style lang="scss" src="./sprite-list.scss"></style>
