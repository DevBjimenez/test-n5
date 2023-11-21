const { container: { ModuleFederationPlugin } } = require('webpack');
const deps = require("./package.json").dependencies;
const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/rick-morty-app/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "rickMortyApp",
            filename: "remoteEntry.js",
            exposes: {
                "./harry": "./src/bootstrap"
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