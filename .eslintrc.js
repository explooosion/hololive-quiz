module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    browser: true,
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // "plugin:vue/essential",
    'plugin:vue/strongly-recommended',
    '@vue/prettier',
  ],

  // required to lint *.vue files
  plugins: ['vue'],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'import/import': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    // TODO: fixed code
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // TODO: fixed code
    'vue/custom-event-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/valid-v-for': 'off',
  },
};
