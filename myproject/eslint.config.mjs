import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        // 意図せず設定ファイルを遡らない様にする
        root: true,

        files: ['**/*.ts', '**/*.tsx', '**/*.vue'],

        // ルール設定
        rules: {
            /**
             * prettierとeslintの競合回避
             */
            // 行の最大長ルールを無効化(prettierに任せる)
            'max-len': 'off',
            // 一行時の属性値数チェックを無効化(prettierに任せる)
            'vue/max-attributes-per-line': 'off',
            // インデントルールを無効化(prettierに任せる)
            'vue/html-indent': 'off',
            // マルチライン時のインデントルールを無効化(prettierに任せる)
            'vue/multiline-html-element-content-newline': 'off',
            // タグの閉じ括弧の前に改行設定を無効化(prettierに任せる)
            'vue/html-closing-bracket-newline': 'off',
            // 単一行要素の内容の前後に改行設定を無効化(prettierに任せる)
            'vue/singleline-html-element-content-newline': 'off',
            // 複数行の時に末尾のカンマを許容
            'comma-dangle': ['error', 'only-multiline'],
        
            // imgのセルフクローズを矯正
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                    },
                },
            ],
            // 不要な変数に対して警告を出す（_から始まるものは許容）
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_', // 引数
                    varsIgnorePattern: '^_', // 変数
                    caughtErrorsIgnorePattern: '^_', // errorハンドリング
                    destructuredArrayIgnorePattern: '^_', // 配列内の変数参照
                },
            ],
            // コンポーネント名のマルチワード警告を無効化
            'vue/multi-word-component-names': 'off',
        },
    }
);