
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;
const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: "development",
    devServer: {
        port: 3002,
        historyApiFallback: true
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "harryPotterApp",
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
    ],

};


module.exports = merge(commonConfig, devConfig)