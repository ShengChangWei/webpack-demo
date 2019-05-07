## webpack.config.js

```shell

// webpack.config.js 是 webpack 打包构建的配置文件
// 我们使用它的第一步就是导出一个对象
// 1. 配置文件是给 webpack 打包用的
//    如果有，就以配置文件的配置为准
//    如果没有，则都走默认
// 2. 该文件就是用来被 Node 执行的
//     因为 webpack 打包构建需要操作文件，webpack 也是基于 Node 开发的
// 3. webpack 打包的时候会自动加载当前模块，读取其中导出的对象，拿到对象中配置项去进行自定义打包构建
// 4. 导出的配置对象中只能按照 webpack 给定的属性来配置，不能乱写
// 5. webpack 打包的时候会自动来读取 webpack.config.js
//    如果想要修改这个文件名，
//    则需要在执行打包命令的时候加上 --config 配置文件名
//    例如：npx webpack --config webpack.config.js
// 6. 但是如果每一次加上这一堆的选项很难记住
//    所以我们推荐把打包的命令配置到 package.json 文件的 scripts 选项中把该命令起个别名存起来
// 7. 接下来我们就可以开心的 npm run build   
// 8. 提示，当你把 npx webpack --config webpack.config.js 配置到 scripts 选项中之后，就不需要使用 npx
//    也就是说我们可以："build": "webpack --config webpack.config.js"
//    由于 webpack.config.js 就是默认文件名吗，所以我们可以：
//    "build": "webpack"
//    虽然简单，我们也这么做，因为接下来一步一步的扩展了

```

