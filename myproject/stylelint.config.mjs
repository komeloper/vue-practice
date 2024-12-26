/** @type {import('stylelint').Config} */
export default {
    extends: [
        // 基本的なルール
        'stylelint-config-standard',

        // vueで使用するための設定
        'stylelint-config-standard-vue',

        // CSSを並び替えを行う
        'stylelint-config-recess-order',
    ],

    plugins: [
        // プロパティの順序チェック
        'stylelint-order',
    ],

    rules: {
        // インデントを4スペースに設定
        indentation: 4,

        // 連続した空行の数を制限
        'max-empty-lines': 1,

        // 空のstyleブロックを許容する
        'no-empty-source': false,

        // 空のブロックを許容する
        'block-no-empty': false,

        // 色コードを短縮系にする
        'color-hex-length': 'short',

        // 色の名前での指定を禁止し、16進数表記にする
        'color-named': 'never',

        // フォント名の重複禁止
        'font-family-no-duplicate-names': true,

        // 相対URLのスキーム部分を禁止
        'function-url-no-scheme-relative': true,

        // キーフレーム名のパターン指定
        'keyframes-name-pattern': '[a-z0-9-]+$',

        // 数字の前にゼロを追加
        'number-leading-zero': 'always',

        // IDセレクタの使用禁止
        'selector-max-id': 0,

        // 複数行の宣言後にコロンの改行
        'declaration-colon-newline-after': 'always-multi-line',

        // 宣言ブロックの末尾にセミコロンを追加
        'declaration-block-trailing-semicolon': 'always',
    },
};
