<script setup>
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);

function addTwo() {
    count.value = count.value + 2;
}
</script>

<template>
    <div>
        <h1>Count:{{ count }}</h1>
        <button @click="increment">+1する</button>
        <button @click="addTwo">+2する</button>
        <nuxt-link to="/">もどる</nuxt-link>
    </div>
</template>
