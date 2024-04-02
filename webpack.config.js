const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');

module.exports = function webpackConfig(env = {}) {
    const { production: isProd = false } = env;

    return {
        entry: './src/app.tsx',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.[contenthash].js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][contenthash][ext]',
                    },
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            new EsLintPlugin({
                extensions: ['ts', 'tsx'],
            }),
        ],
    };
};
