/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  arrowParens: 'always',
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
