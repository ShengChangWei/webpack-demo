const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// webpack 的配置文件
module.exports = {
    // 指定打包的入口文件
    entry: './src/main.js',
    // entry: {
    //     pageOne: './src/index.js',
    //     pageTwo: './src/test.js'
    // },
    // 打包的出口文件
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'main.js' //[name].js // 多入口
    },
    devServer: {
        contentBase: './dist/'
    },
    plugins: [
        new CleanWebpackPlugin(), // 打包之前先把 dist 目录清除一遍
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
         // make sure to include the plugin for the magic
         new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // ES6 转 ES5 [babel-loader](https://webpack.js.org/loaders/babel-loader/)
                // yarn add --dev "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env
                // 当加载以 .js 结尾的资源的时候，使用 babel-loader 对 ES6 => ES5 处理
                // exclude 表示排除第三方包转码
                // 不仅做了转码处理，还有代码优化
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            {
                // 1. npm install --save-dev vue-loader vue-template-compiler
                // 2. 配置
                // 当加载到以 .vue 结尾的文件资源的时候，使用 vue-loader 转换处理
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    }
}