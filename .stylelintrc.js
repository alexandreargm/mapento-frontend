module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-scss"
  ],
  rules: {
    // Tailwindcss rules
    "at-rule-no-unknown": null,
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "no-empty-source": null,

    // Scss rules
    "order/properties-alphabetical-order": true,
    "scss/at-rule-no-unknown": null,
    "scss/at-import-no-partial-leading-underscore": null
  }
}
