## 项目准备和结构

1. `package.json`中`script`字段
+ `start` 本项目中使用`node server.js`相当于自己搭建`webpack-dev-server`, 一般情况下使用`webpack --config ./config/webpack.config.client.js`，只需要配置好`client.js`中相关设置
+ `release/build`打包
+ `dll`，`webpack 4`中相当于`commonchunk` --- 有相关收藏可看
+ `test`
2. 项目结构
+ build
+ config
+ dist
+ node_modules
+ src
    - common
    - fonts
    - images
    - medias
    - pages
    - store
    - styles
    - main.js
+ else file, contains .babelrc .eslintrc.js postcss.config.js index.template.html manifest.json

## 项目逻辑

1. 使用异步组件，配置路由和加载文件的时候遇到一些小 bug
2. 