```
# npm install -g create-react-app
# create-react-app hello-react
# cd hello-react
# npm start
```

##### 暴露配置文件
```
# npm run eject
```

* 端口号修改：

位置 `scripts/start.js`
```
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8204;
```

* 相关文件配置：
位置：`config/paths.js`


### user '@' resolve file
修改文件：
config/webpack.config.dev.js
webpack.config.prod.js
```
// 文件顶部增加方法 line 26
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
...
module.exports = {
  ...
  resolve: {
    extensions: [''],
    alias: {
      ...
      'react-native': 'react-native-web',
      '@': resolve('src'),
    },
    plugins: []
  }
...
```
### React Router 4 简易入门
[React Router 4 简易入门](https://segmentfault.com/a/1190000010174260#articleHeader5)
[React-Router动态路由设计最佳实践](https://segmentfault.com/a/1190000011765141)

### React Loadable - 以组件为中心的代码分割和懒加载
[github](https://github.com/thejameskyle/react-loadable)
参考资料：
[中文文档](https://jamie.build/react-loadable.html)
[webpack v3 结合 react-router v4 做 dynamic import — 按需加载（懒加载）](https://segmentfault.com/a/1190000011128817#articleHeader8)
[参考项目](https://github.com/CodeLittlePrince/react-webapp-spa/tree/master/app)

首先确保已安装 babel-plugin-syntax-dynamic-import 和 react-loadable，未安装请先安装：
`npm install babel-plugin-syntax-dynamic-import babel-preset-stage-2 --save-dev`

其中需要配置`.babelrc`文件
```
// .babelr
{
  "presets": [
    "react",
    "stage-2"
  ],
  "plugins": [
    "syntax-dynamic-import"
  ]
}
```

### 添加less配置
安装less-loader 和 less
`npm install less-loader less --save-dev`
修改webpack配置
修改 `webpack.config.dev.js` 和 `webpack.config-prod.js` 配置文件
* 改动1
/\.css$/ 改为 /\.(css|less)$/,, 修改后如下：
* 改动2：
test: /\.css$/ 改为 /\.(css|less)$/
test: /\.css$/ 的 use 数组配置增加 less-loader

修改后如下：
```
{
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader: require.resolve('less-loader') // compiles Less to CSS
    }
  ],
},
```

### react-router v4 使用 history 控制路由跳转
[react-router v4 使用 history 控制路由跳转](https://segmentfault.com/a/1190000011137828)