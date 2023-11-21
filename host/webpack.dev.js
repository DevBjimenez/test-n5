const { container: { ModuleFederationPlugin } } = require('webpack');
const deps = require("./package.json").dependencies;
const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "HostApp",
            filename: 'remoteEentry.js',
            remotes: {
                "rickMortyMCF": "rickMortyApp@http://localhost:3001/remoteEntry.js",
                "harryPotterMCF": "harryPotterApp@http://localhost:3002/remoteEntry.js"
            },
            shared: {
                ...deps,
                'broadcast-channel': {
                    version: "^5.3.0",
                    singleton: true
                }
            },
        }),
    ],
    target: "web",
};

module.exports = merge(commonConfig, devConfig)