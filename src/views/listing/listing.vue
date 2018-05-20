<template>
    <main class="container listing">

        <header class="listing__header">
        <h1>A repository of free-to-use pixel art</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            Pellentesque ut magna mattis, accumsan massa at, maximus arcu. Donec semper ligula nisl, eu laoreet dui hendrerit eu.</p>
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

        <base-pagination v-if="amountOfPages > 0" :pages="amountOfPages" :current-page="currentPage"></base-pagination>
    </main>
</template>

<script lang="ts" src="./listing.ts"></script>
<style lang="scss" src="./listing.scss"></style>
