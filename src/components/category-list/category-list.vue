<template>
    <ul class="category-list">
        <li v-for="category in categories"
            :class="{'category-list__item': true}">
            <router-link :to="{ path: '/', query: completeQuery(category)}"
                         :class="{'category-list__link': true, 'category-list__link--active': $route.params.categoryName == category }">
                {{displayNameForCategory(category)}}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts" src="./category-list.ts"></script>
<style lang="scss" src="./category-list.scss"></style>
