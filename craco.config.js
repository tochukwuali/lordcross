const cracoAlias = require('craco-alias')

// craco.config.js
module.exports = {
    plugins: [
      {
        plugin: cracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.base.json"
        }
      }
    ],
  
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }