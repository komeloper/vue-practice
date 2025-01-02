# practice

練習用リポジトリ

## 環境構築メモ

- Dockerイメージ: node:22-bookworm-slim
- nuxi@3.16.0
- 

### 初期構築

1. Nuxtプロジェクトの作成

```sh
# プロジェクト用のディレクトリ作成&移動
$ mkdir nuxt-app && cd nuxt-app

# Nuxtプロジェクトを作成
# 'myproject', ':22-bookworm-slim' は任意
$ docker run --rm -u 1000 \
-w /app \
-v ${PWD}:/app \
-it node:22-bookworm-slim \
npx nuxi init myproject
(以下、表示される質問を任意に回答する)
```

2. Nuxtプロジェクトにパッケージを追加

```sh
# 「1. Nuxtプロジェクトの作成」で作成したプロジェクトをマウントすること
$ docker run --rm -u 1000 \
-w /app \
-v ${PWD}/myproject:/app \
-it node:22-bookworm-slim \
npm install pinia aspida @aspida/axios axios \
npm install -D vitest msw
```

3. ソースディレクトリの変更 & `.env` の導入

    1. `nuxt.config.ts` に下記を追記

        ```ts:nuxt.config.ts
        export default defineNuxtConfig({
            // ...
            app: {
                baseURL: process.env.NUXT_APP_BASE_URL,
            }
            // ...
        });
        ```

    2. `.env.local`, `.env.production` をそれぞれ作成
        dotenvが導入済みのため、起動時の引数の変更で対応可能

    3. `package.json` の `scripts` を下記のように変更

        ```json:package.json
        {
            "scripts": {
                "dev": "nuxt dev --dotenv .env.local",
                "generate": "nuxt generate --dotenv .env.local",
                "generate:production": "nuxt generate --dotenv .env.production", 
            }
        }
        ```


4. ESLint&prettierの導入

    1. コンテナ内で下記を実行し、各種パッケージをインストール

    ```sh
    $ npm install -D typescript vue-tsc eslint @nuxt/eslint-config eslint-plugin-prettier
    ```

    2. `eslint.config.mjs` を作成し、ESLintの設定を追記
    3. `prettier.config.mjs` を作成し、prettierの設定を追記
    4. ESLint Stylistic を有効化する場合は `nuxt.config.ts` に設定を追記(prettierを使用する場合は不要)
    5. ESLintを有効化するにはNuxtを再起動する必要あり（コンテナの再起動）


5. stylelintの導入

    1. コンテナ内で下記を実行し、パッケージをインストール

        ```sh
        $ npm install -D stylelint @nuxtjs/stylelint-module stylelint-config-standard stylelint-config-standard-vue stylelint-config-recess-order postcss-html
        ```

    2. `stlyelint.config.mjs` を作成
    3. `nuxt.config.ts` に stylelintの設定を追記


6. piniaの導入

    1. コンテナ内で下記を実行し、パッケージをインストール
    
        ```sh
        $ npm install -D pinia @pinia/nuxt pinia-plugin-persistedstate
        ```
    
    2. `nuxt.config.ts` の `modules` に `@pinia/nuxt`、`pinia-plugin-persistedstate/nuxt` を追記

    3. プロジェクトの `composables` ディレクトリ内にストアについて記載


7. aspidaの導入

    1. コンテナ内で下記を実行し、パッケージをインストール
        ```sh
        $ npm install -D aspida @aspida/axios axios
        ```
    2. `aspida.config.cjs` を作成
    3. `src/api` ディレクトリを作成後、aspidaの作法に則り、apiの型を作成
    4. コンテナ内で `npx aspida --config aspida.config.cjs` を実行し、`src/api/$api.ts` を生成
    5. `src/plugins/aspida.ts` を作成し下記を記述

        ```typescript:src/plugins/aspida.ts
        import aspida from '@aspida/axios';
        import api from '~/api/$api';

        export default defineNuxtPlugin((NuxtApp) => {
            const client = api(aspida());
            NuxtApp.provide('api', client);
        });
        ```

    6. コンテナを再起動


8. vitestの導入

    1. コンテナ内で下記を実行し、パッケージをインストール

        ```sh
        $ npm install -D @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core 
        ```
    2. `nuxt.config.ts` に `@nuxt/test-utils/module` を使用するように設定を追記
    3. `vitest.config.ts` を作成し、必要な設定を追記
    4. package.json の scripts に `"test": "vitest",` を追記