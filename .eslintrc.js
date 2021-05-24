module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    'no-multi-spaces': ['error']
  }
}
