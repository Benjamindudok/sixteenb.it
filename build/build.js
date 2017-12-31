'use strict';

require('./check-versions')();

process.env.NODE_ENV = 'production';

const chalk = require('chalk');
const config = require('../config');
const ora = require('ora');
const path = require('path');
const rm = require('rimraf');
const webpack = require('webpack');

const webpackConfig = require('./webpack.prod.conf');
const spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (error) =>
{
    if (error)
    {
        throw error;
    }

    webpack(webpackConfig, (err, stats) =>
    {
        spinner.stop();

        if (error)
        {
            throw error;
        }

        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: true, // if you are using ts-loader, setting this to true will make tyescript errors show up during build
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors())
        {
            console.log(chalk.red('  Build failed with errors.\n'));
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ));
    })
});
