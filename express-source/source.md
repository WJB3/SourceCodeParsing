![哈哈](./assets/cover.jpg)

# 一、简介

<blockquote style='padding: 10px; font-size: 1em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid rgba(0,189,170,1); background: rgb(239, 235, 233);line-height:1.5;'>
<a href="https://www.expressjs.com.cn/">ExpressJs</a>是一个基于 Node.js 平台，快速、开放、极简的 Web 开发框架，有的前端的小伙伴会说这不是用Node做后台时经常用的框架吗，我学这个干嘛，我又不做后端，其实在我们的项目中无时无刻不运用了这个框架，<a href="https://webpack.docschina.org/configuration/dev-server/">webpack-dev-server</a>内部就使用了这个框架，常见的有以下配置：
</blockquote>

```js
//webpack.config.js
var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },
};
```
<blockquote style='padding: 10px; font-size: 1em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid rgba(0,189,170,1); background: rgb(239, 235, 233);line-height:1.5;'>
webpack配置了这行代码，就会自动打开浏览器，运行localhost:9000进行业务上的开发，底层就用到了express框架，是不是对其实现原理颇有点兴趣？不过我们这节课先不说webpack-dev-server，先将他的底层express弄清楚。
</blockquote>

# 二、Hello World实现-实现最简单的Express

<blockquote style='padding: 10px; font-size: 1em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid rgba(0,189,170,1); background: rgb(239, 235, 233);line-height:1.5;'>
我们进入自己新建的test文件夹下，执行npm init -y 生成一个基本的node项目，进入这个项目下，执行npm install express -D 新建index.js文件，根据官网例子我们写出Hello World的Demo。
</blockquote>

```js
//index
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
<blockquote style='padding: 10px; font-size: 1em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid rgba(0,189,170,1); background: rgb(239, 235, 233);line-height:1.5;'>
如果上面的代码你成功运行控制台应该会出现<code>Example app listening at http://localhost:3000</code>，那你有没有和我一样产生了好奇呢，短短的几句话就能创建一个简易的服务器？会不会觉得很复杂，其实不然，这个框架内部其实是借由了Node底层模块-http模块。<br /><br />
通过http模块的<a href="http://nodejs.cn/api/http.html#http_http_createserver_options_requestlistener">createServer</a>方法会创建一个server实例，其中createServer本身可以接受一个回调函数作为参数，会被自动添加到<code>'<a href="http://nodejs.cn/api/http.html#http_event_request">request</a>'</code>事件上，实例上存在一个可以监听连接(post、get)的方法<a href="http://nodejs.cn/api/net.html#net_server_listen">listen</a>。<br /><br />
我们可以通过http.createServer来实现一个简单的服务器demo。
</blockquote>

```js
//http.js
const http=require('http');

let port=3000;

const server=http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end("我是http创建的")
});

server.listen(port,function(req,res){
    console.log(`Example app listening at http://localhost:${port}`)
})
```
<blockquote style='padding: 10px; font-size: 1em; margin: 1em 0px; color: rgb(0, 0, 0); border-left: 5px solid rgba(0,189,170,1); background: rgb(239, 235, 233);line-height:1.5;'>
如果上面的代码你成功运行控制台应该会出现<code>Example app listening at http://localhost:3000</code>，其中<a href="http://nodejs.cn/api/http.html#http_response_setheader_name_value">response.setHeader(name, value)</a>可以设置响应头。
</blockquote>