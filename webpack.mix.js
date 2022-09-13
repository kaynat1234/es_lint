const eslintPluginReact = require('eslint-plugin-react');
const mix = require('laravel-mix');
require('laravel-mix-eslint')





/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.eslint({
    fix: true,
    extensions: ['js'],
    //...
})
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
   
