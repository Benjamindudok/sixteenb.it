'use strict';

const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');

const config = require('../config');
const utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir)
{
    return path.join(__dirname, '..', dir)
}


module.exports = {
    // set context back to root folder
    context: path.resolve(__dirname, '../'),

    // Entry point
    // This is where it all starts
    entry: {
        app: './src/main.ts'
    },

    // Destination
    // Single file output
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },

    // Module path/name definitions
    resolve: {
        // File types so we can omit these in import statements
        extensions: ['.ts', '.js', '.vue', '.json', '.png'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': resolve('src'),
        }
    },

    // default loaders
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },

    // Webpack plugins
    // e.g. Lint stylesheets with Stylelint
    plugins: [
        new styleLintPlugin({
            configFile: path.resolve(__dirname, '../.stylelintrc'),
            quiet: true
        })
    ]
}
