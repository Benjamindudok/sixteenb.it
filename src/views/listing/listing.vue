<template>
    <main class="container listing">
        <header class="listing__header">
            <form class="listing__search form" @submit="search">
                <div class="form__group">
                    <input :class="{'form__control': true, 'form__control--isTouched': searchKeyword.length != 0}"
                           v-model="searchKeyword"
                           id="search"/>
                    <label class="form__label" for="search">Search</label>
                </div>
            </form>

            <category-list class="listing__categories"></category-list>
        </header>

        <sprite-list :sprites="sprites"></sprite-list>

        <anemone-pagination v-if="amountOfPages > 0" :pages="amountOfPages" :current-page="currentPage" @page-selected="onPageSelected"></anemone-pagination>
    </main>
</template>

<script lang="ts" src="./listing.ts"></script>
<style lang="scss" src="./listing.scss"></style>
