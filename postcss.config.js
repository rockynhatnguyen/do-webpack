module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: 'advanced',
    })
  ]
};
