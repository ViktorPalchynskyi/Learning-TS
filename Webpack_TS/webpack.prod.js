const path = require('node:path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
    },
    output: {
        filename: '[contenthash]bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },
    plugins: [new CleanWebpackPlugin()],
};
