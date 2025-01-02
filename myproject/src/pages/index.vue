<script setup>
// piniaのサンプル
const counterStore = useCounterStore();

// aspidaのサンプル
const pokemonId = ref(1);
const pokemon = ref(null);
const error = ref(null);

// APIクライアントを取得
const api = useNuxtApp().$api;

// PokeAPIからポケモンのデータを取得
async function getPokemon() {
    console.log('button');
    try {
        console.log(api);
        const response = await api.v2.pokemon._id(pokemonId.value).$get();
        console.log('try');
        pokemon.value = response;
        error.value = null;
    } catch (error) {
        error.value = 'Pokemon not found!';
        console.log('error:', error);
        pokemon.value = null;
    }
}

// VitestのSample用コンポーネント
const name = ref('World');
</script>

<template>
    <div>
        <section>
            <h2>Pinia</h2>
            <nuxt-link to="/count">count&ensp;ページへ飛ぶ&ensp;</nuxt-link>
            <p>ボタンを{{ counterStore.count }}回、押しました！</p>
            <p>2倍の数は{{ counterStore.double }}です。</p>
        </section>
        <section>
            <h2>aspida</h2>
            <div>
                <input v-model="pokemonId" type="nubmer" placeholder="Enter Pokemon ID" />
                <button @click="getPokemon">Get&ensp;Pokemon</button>
            </div>
            <div v-if="pokemon">
                <h3>{{ pokemon.name }}</h3>
                <img :src="pokemon.sprites.front_default" alt="Pokemon sprite" />
                <p>Height:&ensp;{{ pokemon.height }}m</p>
                <p>Weight:&ensp;{{ pokemon.weight }}kg</p>
            </div>

            <div v-if="error" class="error">
                <p>{{ error }}</p>
            </div>
        </section>

        <section>
            <h2>Vitest Sample</h2>
            <TestSample :name="name" />
            <p>
                <input type="text" v-model="name" />
            </p>
        </section>
    </div>
</template>
