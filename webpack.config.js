const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { title } = require('process')
 


/**
 * We are saying webpack to bundle two seperate files (index.js and add.js)
 * This is done by having two entry values and we are using substitutions
 * to give each bundle a unique name instead of specific file name. 
 */

module.exports = {
    entry: {
        index: "./src/index.js",
        add: "./src/greeting.js"
    },
    output: {
        /**
         * However, when creating multiple bundles via more than one entry point, 
         * code splitting, or various plugins, you should use one of the following 
         * substitutions to give each bundle a unique name
         */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        /**
         * This HtmlWebpackPlugin will generate the index.html file for us,
         * now we don't have to create the index.html file in the dist folder.
         */
        new HtmlWebpackPlugin({
            title: "Output Management",
        })
    ]
}