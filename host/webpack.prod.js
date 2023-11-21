
const { container: { ModuleFederationPlugin } } = require('webpack');
const deps = require("./package.json").dependencies;
const { default: merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/* it's getted in production env*/
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/host/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "HostApp",
            filename: 'remoteEentry.js',
            remotes: {
                "rickMortyMCF": `rickMortyApp@${domain}/rick-morty-app/latest/remoteEntry.js`,
                "harryPotterMCF": `harryPotterApp@${domain}/harry-potter-app/latest/remoteEntry.js`
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

module.exports = merge(commonConfig, prodConfig)