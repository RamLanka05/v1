module.exports = {
  // Use explicit require to ensure PostCSS loads the correct plugin
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}
