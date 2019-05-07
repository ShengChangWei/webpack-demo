const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// webpack 的配置文件
module.exports = {
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
    plugins: [
         // make sure to include the plugin for the magic
         new VueLoaderPlugin()
    ],
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
                // 1. npm install --save-dev vue-loader vue-template-compiler
                // 2. 配置
                // 当加载到以 .vue 结尾的文件资源的时候，使用 vue-loader 转换处理
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    }
}