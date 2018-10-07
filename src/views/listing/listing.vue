<template>
    <main class="container listing">

        <header class="listing__header">
        <h1>A collection of free pixel art assets</h1>
        <p>Feel free to browse through our collection of all kinds of pixel art assets, from interface elements to (animated) characters and environmental pieces.   </p>
        </header>

        <div class="listing__filters">
            <form class="listing__search form" @submit="search">
                <div class="form__group">
                    <input :class="{'form__control': true, 'form__control--isTouched': searchKeyword.length != 0}"
                           v-model="searchKeyword"
                           id="search"/>
                    <label class="form__label" for="search">Search</label>
                </div>
            </form>

            <category-list class="listing__categories"></category-list>
        </div>

        <sprite-list :sprites="sprites"></sprite-list>

        <anemone-pagination v-if="amountOfPages > 0" :pages="amountOfPages" :current-page="currentPage" @page-selected="onPageSelected"></anemone-pagination>
    </main>
</template>

<script lang="ts" src="./listing.ts"></script>
<style lang="scss" src="./listing.scss"></style>
