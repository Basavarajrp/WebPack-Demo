const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
    entry: {
        /**
         * Multiple entry points
         */
        index: './src/index.js',
        another: './src/another-module.js',
    },
    output: {
        /**
         * using [name] to generate multiple bundles
         */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        /**
         * using BundleAnalyzerPlugin to analyze the bundle size
         */
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle-analyzer-report.html',
        })
    ],
    optimization: {
        /**
         * using splitChunks to split common modules into separate  bundles
         */
        splitChunks: {
            chunks: 'all',
        },
    },
}