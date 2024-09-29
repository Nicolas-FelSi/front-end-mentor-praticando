<template>
  <main>
    <section class="m-4">
      <h1 class="fw-bolder">Sobremesas</h1>
      <CardDessert v-for="(dessert, index) in dessertsList" :key="index"
        :category="dessert.category"
        :image="dessert.image.mobile"
        :name="dessert.name"
        :price="dessert.price"
        class="mt-4"
      />
    </section>
    <section class="m-4 bg-white p-4 rounded-2">
      <h2 class="fw-bold mb-4">Seu carrinho {{ quantityItemsInCart > 0 ? `(${quantityItemsInCart})` : ''}}</h2>

      <div class="mt-4 d-flex justify-content-between align-items-center">
        <p>Total do pedido</p>
        <p class="fs-3 fw-bold">R$46,50</p>
      </div>
      <div class="carbonNeutral d-flex align-items-center gap-2 rounded-2 p-3">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="">
        <p>This is a <strong>carbon-neutral</strong> delivery</p>
      </div>
      <button 
        class="btn rounded-5 text-light mt-4 w-100 p-3"
        data-bs-toggle="modal" data-bs-target="#exampleModal"  
      >
        Confirm Order
      </button>
    </section>
  </main>
  <ConfirmationModal/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardDessert from './components/CardDessert.vue';
import getDesserts from './data/get-desserts';
import Dessert from './types/models';
import ItemInCart from './components/ItemInCart.vue';
import ConfirmationModal from './components/ConfirmationModal.vue';

const dessertsList = ref<Dessert[]>([]);
const quantityItemsInCart = ref(0);

const handleGetDesserts = async () => {
  const response = await getDesserts();

  dessertsList.value = response.data.map(dessert => dessert);
}

onMounted(handleGetDesserts)
</script>

<style scoped>
  h1, 
  div > p.fw-semibold,
  p.fs-3,
  .carbonNeutral p {
    color: var(--Rose-900);
  }

  h2,
  span.quantity {
    color: var(--Red);
  }

  h2 + div.border-bottom {
    border-color: var(--Rose-200);
  }

  span.unitPrice {
    color: var(--Rose-400);
  }

  span.totalPriceDessert {
    color: var(--Rose-500);
  }

  button.btnRemoveCart {
    width: 20px;
    height: 20px;
    border: 1px solid var(--Rose-500);
    padding: 0;
  }

  .carbonNeutral {
    background-color: var(--Rose-100);
  }

  .carbonNeutral p {
    font-size: 14.5px;
    margin: 0;
  }

  .carbonNeutral + button {
    background-color: var(--Red);
  }
</style>