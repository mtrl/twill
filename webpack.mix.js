let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application.
 |
 */

mix.options({
  processCssUrls: false,
}).webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve('frontend/js')
    }
  }
});

mix.js(
  'frontend/js/main-listing.js',
  'assets/dist/js'
).js(
  'frontend/js/main-form.js',
  'assets/dist/js'
).js(
  'frontend/js/main-buckets.js',
  'assets/dist/js'
).js(
  'frontend/js/main-dashboard.js',
  'assets/dist/js'
).extract([
  'vue', 'vuex', 'axios',
  'quill', 'vuedraggable', 'cropperjs',
  'flatpickr', 'vue-select', 'vue-timeago',
  'date-fns', 'lodash/debounce'
]).sass(
  'frontend/scss/app.scss',
  'assets/dist/css'
);

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}