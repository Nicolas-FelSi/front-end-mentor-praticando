<template>
    <div class="position-relative">
        <img class="img-fluid rounded-3 mb-3" src="../assets/images/image-baklava-mobile.jpg" alt="">
        <button class="btn border-1 border-black rounded-5 p-2 px-4 d-flex gap-1 align-items-center position-absolute top-60">
            <img src="../assets/images/icon-add-to-cart.svg"></img>
            <span>Add to cart</span>
        </button>
        <p>Waffle</p>
        <p>Waffle with Berries</p>
        <p>R$6,50</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    button.top-60 {
        background-color: var(--rose-50);
    }

    .top-60 {
        top: 57%;
        right: 25%;
    }
</style>