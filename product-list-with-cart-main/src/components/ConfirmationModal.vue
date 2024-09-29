<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <img class="mb-4" src="../assets/images/icon-order-confirmed.svg" alt="">
                    <h2 class="fw-bold">Order Confirmed</h2>
                    <p class="mb-4">We hope you enjoy your food!</p>
                    <div class="orderConfirmed p-3 rounded-3">
                        <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                            <div class="d-flex gap-3">
                                <img class="img-fluid rounded-3" src="../assets/images/image-baklava-mobile.jpg" alt="">
                                <div class="d-flex flex-column">
                                    <span class="fw-semibold mb-2 name">Classic Tiramisu</span>
                                    <div>
                                        <span class="fw-semibold me-3 quantity">1x</span>
                                        <span class="unitPrice">@ R$5,50</span>
                                    </div>
                                </div>
                            </div>
                            <p class="fw-semibold totalPriceDessert">R$5,50</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p>Order Total</p>
                            <p class="fw-bold totalPrice fs-3">R$46,50</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn text-light m-4 rounded-5 p-2" data-bs-dismiss="modal">Start New Order</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    h2 {
        font-size: 32px;
        color: var(--Rose-900);
    }

    h2 + p,
    .unitPrice {
        color: var(--Rose-500);
    }

    .orderConfirmed {
        background-color: var(--Rose-50);
    }

    img.img-fluid {
        width: 60px;
    }

    .name,
    .totalPriceDessert,
    .totalPrice {
        color: var(--Rose-900);
    }

    .quantity {
        color: var(--Red);
    }

    button {
        background-color: var(--Red);
    }
</style>