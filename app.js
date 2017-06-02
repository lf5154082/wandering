const http=require('http');
const express=require('express');
const user=require('./user');
const msg=require('./msg');
var app=express();//��������
http.createServer(app).listen(8080);
//��ͻ����ṩ��̬��Դ��Ӧ
    app.use(express.static('public'));
    app.get('/',(req,res)=>{
    //���ͻ���������/,���ض���login.html
    res.redirect('w_index.html')
    });
//��ͻ����ṩ��̬��Դ��Ӧ
    app.post('/user/register',user.register);
    app.post('/user/login',user.login);
    app.post('/msg',msg.add);