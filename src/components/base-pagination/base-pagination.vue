<template>
    <ul class="pagination" v-if="pages > 1">

        <li v-for="page in pagesInRange" :key="page" class="pagination__item">
            <router-link :to="'/?page=' + page" :class="linkClassesForPage(page)">{{page}}</router-link>
        </li>

    </ul>
</template>

<script lang="ts" src="./base-pagination.ts"></script>
<style lang="scss" src="./base-pagination.scss"></style>
