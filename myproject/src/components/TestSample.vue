<script lang="ts" setup>
defineProps<{
    name: string,
}>();
const counter = ref(0);
const nuxtApp = useNuxtApp();

</script>

<template>
    <div>Hello, {{ name }}!</div>
    <button @click="counter++">Count up!!</button>
    <div data-testid="counter">{{ counter }}</div>
    <div data-testid="nuxt-version">{{ nuxtApp.versions.nuxt }}</div>
</template>
