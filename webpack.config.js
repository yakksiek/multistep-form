/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');

module.exports = function (env = {}) {
    const { production: isProd = false } = env;

    return {
        entry: './src/app.js',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.[contenthash].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][contenthash][ext]',
                    },
                },
                // {
                //     test: /\.scss$/,
                //     exclude: /node_modules/,
                //     use: ['style-loader', 'css-loader', 'sass-loader'],
                // },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html',
            }),
            new EsLintPlugin(),
        ],
    };
};
