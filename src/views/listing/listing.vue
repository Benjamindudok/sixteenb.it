<template>
    <main class="container listing">

        <header class="listing__header">
            <category-list class="listing__categories"></category-list>
        </header>

        <sprite-list :sprites="sprites"></sprite-list>

        <base-pagination :pages="amountOfPages" :current-page="currentPage"></base-pagination>
    </main>
</template>

<script lang="ts" src="./listing.ts"></script>
<style lang="scss" src="./listing.scss"></style>
