// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    // ソースディレクトリの変更
    srcDir: 'src/',

    // ベースとなるディレクトリの設定
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL,
    },

    // ホットリロード
    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },

    modules: ['@nuxtjs/stylelint-module'],

    stylelint: {
        //
    },
});
