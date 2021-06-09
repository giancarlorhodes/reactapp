//const webpack = require('webpack');
const path = require ('path');

const APP_DIR = path.resolve(__dirname,'ClientApp');
//const BUILD_DIR = path.resolve(__dirname,'build');
const PUBLIC_DIR = path.resolve(__dirname,'public');

const config = {
    entry: APP_DIR + '/Client.js',
    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true,
        historyApiFallback: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js?$/,
                options: {
                    presets: [
                        'react', 'stage-2',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

};

module.exports = config;