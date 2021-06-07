// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('@tailwindcss/typography'),
          require('autoprefixer'),
        ],
      },
    },
  }