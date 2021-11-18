const withTM = require('next-transpile-modules')(['@babylonjs/core']);
import withPlugins from 'next-compose-plugins';

const nextConfig = {
    target: 'serverless',
    webpack: function (config) {
        /// below is not required for the problem described. Just for reference.(es6)
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' })
        return config
    }
}

export default withPlugins([withTM], nextConfig);