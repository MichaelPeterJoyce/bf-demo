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
            {
                test: /\.html?$/,
                loader: ['html-loader'],
            },
            {
                test: /\.png?$/,
                loader: ['file-loader'],
            },
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        port: 8090,
        watchContentBase: true,
    }
};

