<script setup>
const counterStore = useCounterStore();
</script>

<template>
    <div>
        <nuxt-link to="/count">count&ensp;ページへ飛ぶ&ensp;</nuxt-link>
        <p>ボタンを{{ counterStore.count }}回、押しました！</p>
        <p>2倍の数は{{ counterStore.double }}です。</p>
    </div>
</template>
