const http=require('http');
const express=require('express');
const user=require('./user');
const msg=require('./msg');
var app=express();//请求处理函数
http.createServer(app).listen(8080);
//向客户端提供静态资源响应
    app.use(express.static('public'));
    app.get('/',(req,res)=>{
    //若客户端请求了/,则重定向到login.html
    res.redirect('w_index.html')
    });
//向客户端提供动态资源响应
    app.post('/user/register',user.register);
    app.post('/user/login',user.login);
    app.post('/msg',msg.add);