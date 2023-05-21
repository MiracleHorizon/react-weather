const prettierConfig = {
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  semi: false,
  trailingComma: 'none',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  arrowParens: 'avoid',
  plugins: [require('prettier-plugin-tailwindcss')]
}

module.exports = prettierConfig
