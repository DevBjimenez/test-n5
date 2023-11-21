const { container: { ModuleFederationPlugin } } = require('webpack');
const deps = require("./package.json").dependencies;
const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/harry-potter-app/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "harryPotterApp",
            filename: "remoteEntry.js",
            exposes: {
                "./rick": "./src/index"
            },
            shared: {
                ...deps,
                'broadcast-channel': {
                    version: "^5.3.0",
                    singleton: true
                }
            },
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)