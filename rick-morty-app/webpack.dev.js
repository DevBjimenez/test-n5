const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;

const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: "development",
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:3001/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "rickMortyApp",
            filename: "remoteEntry.js",
            exposes: {
                "./rick": "./src/bootstrap"
            },
            shared: {
                ...deps,
                'broadcast-channel': {
                    version: "^5.3.0",
                    singleton: true
                }
            },
        })
    ],
};

module.exports = merge(commonConfig, devConfig)