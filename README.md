# yaoxfly-auto-components

#### 介绍

通过命令自动生成组件，包括页面组件和外部引用的组件。

#### 安装教程

```
npm i  yaoxfly-auto-components -save-dev
```

#### 使用说明

在 package.json 文件中 添加

```js
"scripts": {
    "create:comp": "node ./node_modules/yaoxfly-auto-components/lib/createComponent",
    "create:view": "node ./node_modules/yaoxfly-auto-components/lib/createView",
},
```

- 在 src/components 下创建个 global 目录放置全局组件

- 命令

```js
//生成全局组件，以及其他要引入的组件--生成的文件的路径src/components下
npm run create:comp

//生成页面组件--生成文件的路径在src/views下
npm run create:view
```

- 安装 chalk，这插件能让控制台输出语句有各种颜色区分

```js
npm i chalk --save-dev
```
