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
      }
    }
  },

  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    // ESLint Stylisticを有効化
    config: {
      stylistic: {
        'indent': 4,

        // セミコロン
        'semi': true,

        // シングルクォートを使用
        'quotes': 'single',

        // 末尾カンマを矯正
        'comma-dangle': 'always',

        // アロー関数を括弧で囲む
        'arrow-parents': 'always',
      },
    },
  },

})
