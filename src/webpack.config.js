const path = require('path');
module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        app: './app.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: ['ts-loader'],
            },
            {
                test: /\.css?$/,
                loader: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        port: 8090,
        publicPath: '/',
        watchContentBase: true,
    }
};

