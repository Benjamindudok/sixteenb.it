const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
                src: path.resolve(__dirname, "src")
            }
        }
    }
};