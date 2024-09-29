<template>
    <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mt-3">
        <div class="d-flex flex-column">
            <p class="d-inline-block fw-semibold mb-1">{{ props.name }}</p>
            <div>
                <span class="d-inline-block me-3 fw-semibold quantity">{{ props.quantity }}x</span>
                <span class="d-inline-block me-3 unitPrice">@R${{ props.unitPrice }}</span>
                <span class="fw-semibold totalPriceDessert">R${{ props.totalPriceDessert }}</span>
            </div>
        </div>
        <button class="btn rounded-5 btnRemoveCart d-flex justify-content-center align-items-center">
            <img src="./assets/images/icon-remove-item.svg" alt="">
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string;
    quantity: number;
    unitPrice: number;
    totalPriceDessert: number;
}>()
</script>

<style scoped></style>