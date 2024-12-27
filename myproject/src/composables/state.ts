// 以下は自動でインポートされる
// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
    'counter',
    () => {
        // State
        const count = ref(0);

        // Getters
        const double = computed(() => {
            return count.value * 2;
        });

        // Actions
        function increment() {
            count.value++;
        }
        return { count, double, increment };
    },
    {
        // persistの設定(Storeの永続化)
        // persist: true,
        persist: {
            // セッションストレージに状態を保存
            storage: piniaPluginPersistedstate.sessionStorage(),
            pick: ['count'],
        },
    }
);
