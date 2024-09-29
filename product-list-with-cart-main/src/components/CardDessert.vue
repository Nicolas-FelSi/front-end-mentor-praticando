<template>
	<div class="position-relative">
		<img class="img-fluid rounded-3 mb-3" :src="props.image" :alt="props.name">
		<button 
			class="btn border-1 border-dark-subtle rounded-5 p-2 px-4 d-flex gap-2 align-items-center position-absolute top-60"
		>
			<img src="../assets/images/icon-add-to-cart.svg"></img>
			<span class="fw-semibold">Adicionar ao carrinho</span>
		</button>

		<span class="d-inline-block mt-4 fw-normal">{{ props.category }}</span>
		<span class="d-block fw-semibold">{{ props.name }}</span>
		<p class="fw-semibold">R${{ props.price.toFixed(2).replace(".", ",") }}</p>
	</div>
</template>

<script setup lang="ts">

const props = defineProps<{
	image: string;
	category: string;
	name: string;
	price: number;
}>();

</script>

<style scoped>
button.top-60 {
	background-color: var(--Rose-50);
	top: 59%;
	right: 16%;
}

button span {
	font-size: 14px;
	font-weight: normal;
}

span.mt-4 {
	font-size: 13.5px;
	font-weight: normal;
	color: var(--Rose-500)
}

span.fw-semibold {
	color: var(--Rose-900);
}

p.fw-semibold {
	color: var(--Red);
}
</style>