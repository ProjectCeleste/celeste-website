module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  ignorePatterns: ["node_modules/", "dist/"],
  // add your custom rules here
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', { 'semi': false }],
    'vue/html-self-closing': 'off'
  }
}
