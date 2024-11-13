/**
 * Now with this webpack configuration file we can avoid running npm webapack and run this config file
 * using `npx webpack --config webpack.config.js`
 * This avoids manually runnig webpack commands on the terminal.
 * 
 * A configuration file allows far more flexibility than CLI usage. We can specify loader rules, plugins, 
 * resolve options and many other enhancements this way.
 */


const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};
