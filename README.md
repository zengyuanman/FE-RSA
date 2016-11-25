# FE-RSA

## demo简介
主要解决电话，密码等数据在 web 端和服务端通讯过程中的加密问题，本项目前端使用 js RSA加密，后端使用node 解密

> 本项目公钥私钥对为在线生成，RSA 生成密钥有pkcs#1与pkcs#8两种格式选择，由于有js RSA模块，本 demo 使用pkcs#1格式生成。


## demo运行指引
进入node 目录，运行 grunt

> 为方便调试，使用了 nodemon 进行文件监听，自动重启 node服务


## 关于微信小程序的补充
在微信小程序中，没有 window 对象，没有html5中提供的伪随机数生成函数，jsencrypt库中挂载在 window 对象下面的对象也不可用，同时由于微信小程序独特的引用方式，对原版本的jsencrypt进行了一些小改动。
在小程序中使用修改过的jsencrypt库，通过 require 引用，其他的同网页版。

> 在目录 node/wxapp 中有针对小程序的简易修改版jsencrypt


##相关版权
- 本项目服务端由 Express脚手架搭建  
- 本项目 grunt 打包模块  来自 Sails 框架的 grunt 模块  
- 本项目前端 RSA 加密库来自  [jsencrypt](https://github.com/travist/jsencrypt)  

