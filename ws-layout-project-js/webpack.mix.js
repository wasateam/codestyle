const mix = require("laravel-mix");
// require("laravel-mix-polyfill");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: mix.config.babel()
          }
        ]
      }
    ]
  }
});

mix
  .js("resources/js/vue-components-build.js", "public/js")
  .sass("resources/scss/app.scss", "public/css")
  // .polyfill({
  //   enabled: true,
  //   useBuiltIns: "usage",
  //   targets: { firefox: "50", ie: 11 }
  // });
