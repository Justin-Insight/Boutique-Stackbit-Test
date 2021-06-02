const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    // purgecss({
    //   content: [
    //     './layouts/**/*.html',
    //     './layouts/**/*.svg',
    //     './content/**/*.md',
    //   ],
    //   safelist: [
    //     'is-active',
    //     'nav-open',
    //     'collapse',
    //     'expand',
    //   ],
    // }),
  ],
}