const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        entry: './src/index.js',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './dist/'),
        clean: true
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin(),
    ],
}