const path = require('path')

// webpack 的配置文件
module.exports = {
    // 指定打包的入口文件
    entry: './src/index.js',
    // entry: {
    //     pageOne: './src/index.js',
    //     pageTwo: './src/test.js'
    // },
    // 打包的出口文件
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'main.js' //[name].js // 多入口
    }
}