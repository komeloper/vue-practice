#!/bin/bash

trap stop SIGINT SIGTERM

function stop() {
    kill "${PID}"
    wait "${PID}"
}

# node_modulesが存在しない場合はインストール
if [ ! -d ./node_modules ]; then
    npm install
fi

# 開発用サーバの起動
npm run dev & PID="$!"
wait "${PID}"