const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');

module.exports = function (env = {}) {
    const { production: isProd = false } = env;

    return {
        entry: './src/app.tsx', // Point to the main TypeScript file
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.[contenthash].js',
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // Use this regex to process both .ts and .tsx files
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
                // If using TypeScript with ESLint, specify your configuration file:
                extensions: ['ts', 'tsx'],
                // Optionally specify the path to your ESLint configuration file:
                // eslintPath: './.eslintrc',
            }),
        ],
    };
};
