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