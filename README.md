### 项目运行（nodejs 6.0+）
由于涉及大量的 ES6/7 等新属性，建议node版本 6.0以上
```
git clone https://github.com/cherislive/react-project.git
cd redux-project
npm install
npm start
```

** build **（发布）
```
npm run build
```

### 技术栈
react + redux + react-router + webpack + ES6/7

### 其他

#### 使用脚手架构建项目（本项目不需要重新构建）
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

#### 端口号修改：
位置 `scripts/start.js`
```
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8204;
```

### 目标功能
- [x] 路由RR4 -- 完成
- [x] 路由嵌套 -- 完成
- [x] 保护式路由 -- 完成
- [x] 异步请求封装 -- 完成
- [x] 组件卸载后 xhr abort -- 完成
- [x] Dialog -- 完成
- [ ] Store -- 待完善


### 项目文件配置：
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
[React Router 4.0使用指南](https://www.jianshu.com/p/e3adc9b5f75c/)
[React Router v4 版本 完全指北](https://www.zcfy.cc/article/react-router-v4-the-complete-guide-mdash-sitepoint-4448.html)

### React Loadable - 以组件为中心的代码分割和懒加载
[github](https://github.com/thejameskyle/react-loadable)
参考资料：
[中文文档](https://jamie.build/react-loadable.html)
[webpack v3 结合 react-router v4 做 dynamic import — 按需加载（懒加载）](https://segmentfault.com/a/1190000011128817#articleHeader8)
[参考项目](https://github.com/CodeLittlePrince/react-webapp-spa/tree/master/app)

首先确保已安装 babel-preset-es2015 babel-plugin-syntax-dynamic-import 和 react-loadable，未安装请先安装：
`npm install babel-preset-es2015 babel-plugin-syntax-dynamic-import babel-preset-stage-2 --save-dev`

其中需要配置`.babelrc`文件
```
// .babelr
{
  "presets": [
    "es2015",
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


### 按需加载 antd
[如何修改create-react-app的配置](https://www.jianshu.com/p/f9535acd0462)
[Create-react-app+Antd+Less配置](http://cnodejs.org/topic/5a31f0bdd92f2f5b185ace61)

react-app-rewired的作用就是在不eject的情况下，覆盖create-react-app的配置。如果已经eject导出了配置，就没有必要使用react-app-rewired。