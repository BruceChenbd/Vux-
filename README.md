# vux-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```bash
npm init #初始化一个项目，生成package.json文件
# 在初始化项目的时候name属性尽量避免使用一些已经存在的名字
# 可以通过http://npmjs.com/网站进行包名查询
# 包名重复的时候安装模块会报错，提示不能在自身上安装自己
# 包名的命名规则为：全部小写字母组成，多个单词用"-"链接
npm i 模块名
# 安装指定名字的模块,默认安装最新版本的
# 模块名@版本号 可以安装指定版本的模块
#   如： npm i jquery@1.9.1 安装版本号为1.9.1的jQuery
# npm i 是npm install的简写
npm uninstall 模块名
#   卸载指定的模块
npm run xxx
# 运行指定的脚本（命令）
#  run之后的参数在package.json中的scripts节点设置



```

```bash
### 临时调试服务器anywhere
npm i anywhere -g
# 全局安装anywhere模块
# anywhere 是一个临时的web服务器，用于演示效果
# web服务器默认访问目录中的index.xx文件
anywhere 端口号
# 进入需要展示的目录之后运行
# 在指定的端口开启一个临时服务器
```

### 常见的web服务器

```bash
iis
  微软的web服务器
     优点：配置简单，使用方便
     缺点：不能适应大量并发访问，封闭环境，可拓展性差
     总结：常用在小型项目
apache
  开源web服务器
     优点：扩展性强，性能好，跨平台
     缺点：配置稍微麻烦，高并发时效果不好
     总结：最常见的web服务器，很多大型项目在用，经典的组合lamp(linux apache mysql php/python),
     通过fastcgi方式可做很多扩展，是最常见的java项目使用的web服务器
nginx
  轻量级的 web服务器
     优点：资源占用小，性能卓越，跨平台，扩展性强，高并发等等
     缺点：配置稍微麻烦
     总结：现阶段使用比较广泛的web服务器，被很多大公司和端口对接使用，非常的方便好用

```

### 购物车实现思路以及注意事项
> 购物车在电商系统中最常见的一种功能，通常购物车有两种存储方式，存数据库和存本地cookie，现在很多商城为了实现多端数据的统一
>  把购物车存储在数据库中
```
购物车中需要存储商品的id 数量
向购物车中添加商品
  验证库存是否足够和商品是否可以购买(对接服务器端数据接口)
  情况一
    此商品已经在购物车中存在，那么修改当前商品的数量
  情况二
    此商品在购物车中不存在，那么把商品加入购物车
从购物车中删除商品
